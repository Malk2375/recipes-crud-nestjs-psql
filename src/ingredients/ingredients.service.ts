import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { Recipe } from '../recipes/entities/recipe.entity';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientsRepository: Repository<Ingredient>,
    @InjectRepository(Recipe)
    private readonly recipesRepository: Repository<Recipe>,
  ) {}

  // Creates a new ingredient and saves it to the database
  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const ingredient = this.ingredientsRepository.create(createIngredientDto);
    return this.ingredientsRepository.save(ingredient);
  }

  // Retrieves all ingredients from the database
  async findAll(): Promise<Ingredient[]> {
    return this.ingredientsRepository.find();
  }

  // Retrieves a specific ingredient by its ID
  async findOne(id: number): Promise<Ingredient> {
    const ingredient = await this.ingredientsRepository.findOne({
      where: { id },
    });
    if (!ingredient) {
      throw new NotFoundException(`Ingredient with ID ${id} not found`);
    }
    return ingredient;
  }

  // Updates a specific ingredient by its ID with new data
  async update(
    id: number,
    updateIngredientDto: UpdateIngredientDto,
  ): Promise<Ingredient> {
    const ingredient = await this.findOne(id);
    Object.assign(ingredient, updateIngredientDto);
    return this.ingredientsRepository.save(ingredient);
  }

  // Removes a specific ingredient by its ID if it is not used in any recipes
  async remove(id: number): Promise<void> {
    await this.findOne(id);

    const recipesUsingIngredient = await this.recipesRepository.count({
      where: { ingredients: { id } },
    });
    if (recipesUsingIngredient > 0) {
      throw new ConflictException(
        'Cannot remove ingredient as it is used in one or more recipes',
      );
    }

    // Deletes the ingredient from the database
    const result = await this.ingredientsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Ingredient with ID ${id} not found`);
    }
  }
}

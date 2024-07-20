import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}

  // Creates a new recipe using the provided data and saves it to the database
  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const recipe = this.recipesRepository.create(createRecipeDto);
    return this.recipesRepository.save(recipe);
  }

  // Retrieves all recipes, including their related ingredients
  async findAll(): Promise<Recipe[]> {
    return this.recipesRepository.find({ relations: ['ingredients'] });
  }

  // Retrieves a specific recipe by ID, including its related ingredients
  async findOne(id: number): Promise<Recipe> {
    const recipe = await this.recipesRepository.findOne({
      where: { id },
      relations: ['ingredients'],
    });
    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
    return recipe;
  }

  // Updates an existing recipe by ID with new data
  async update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<Recipe> {
    const recipe = await this.findOne(id);

    // Custom logic: Log 'BAZINGA' if the recipe's name changes
    if (updateRecipeDto.name && updateRecipeDto.name !== recipe.name) {
      console.log('BAZINGA');
    }

    // Merge the updated data into the existing recipe object
    Object.assign(recipe, updateRecipeDto);
    return this.recipesRepository.save(recipe);
  }

  // Deletes a specific recipe by ID from the database
  async remove(id: number): Promise<void> {
    const result = await this.recipesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
  }
}

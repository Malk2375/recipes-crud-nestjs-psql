import { Ingredient } from '../../ingredients/entities/ingredient.entity';

export class UpdateRecipeDto {
  name?: string;
  type?: 'breakfast' | 'lunch' | 'dinner';
  ingredients?: Ingredient[];
  instructions?: string;
}

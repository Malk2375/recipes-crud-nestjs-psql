import { Ingredient } from '../../ingredients/entities/ingredient.entity';

export class CreateRecipeDto {
  name: string;
  type: 'breakfast' | 'lunch' | 'dinner';
  ingredients: Ingredient[];
  instructions: string;
}

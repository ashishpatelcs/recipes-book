import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe', 'http://www.indianfoodforever.com/images/rainy-recipes.jpg'),
    new Recipe('Paratha', 'This is paratha recipe',
    'https://media.gettyimages.com/photos/indian-breakfast-in-goa-picture-id511910426?s=612x612')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}

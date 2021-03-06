import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shoppinglist.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(1, 'Samosa Chat',
      'Samasa is a popular snack in Indian sub-continent!',
      'http://www.indianfoodforever.com/images/rainy-recipes.jpg',
      [
        new Ingredient('Maida', 10),
        new Ingredient('Potato', 2)
      ]
    ),
    new Recipe(2, 'Paratha',
      'This is paratha recipe',
      'https://media.gettyimages.com/photos/indian-breakfast-in-goa-picture-id511910426?s=612x612',
      [
        new Ingredient('Wheat Floor', 1),
        new Ingredient('Ghee', 100)
      ]
    )
  ];

  constructor(private shoppinglistService: ShoppinglistService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id) {
    let recipe = null;
    this.recipes.forEach(e => {
      if (e.id == id) {
        recipe = e;
        return;
      }
    });
    return recipe;
  }

  toShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredient(...ingredients);
  }
}

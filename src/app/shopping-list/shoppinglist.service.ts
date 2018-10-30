import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  ingredientAdded = new EventEmitter <Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Wheat Floor', 40)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients);
  }
}

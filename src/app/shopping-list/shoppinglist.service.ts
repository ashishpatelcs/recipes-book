import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  ingredientAdded = new EventEmitter <Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Wheat Floor', 40)
  ];

  constructor(private toastr: ToastrService) { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(...ingredient) {
    this.ingredients.push(...ingredient);
    this.ingredientAdded.emit(this.ingredients);
    this.toastr.success('New Ingredient Added!');
  }

}

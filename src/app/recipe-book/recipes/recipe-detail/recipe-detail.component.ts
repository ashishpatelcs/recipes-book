import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../../recipe.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('recipeItem') recipe: Recipe;

  constructor(private recipeService: RecipeService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.recipeService.toShoppingList(this.recipe.ingredients);
    this.toastr.success('Recipe ingredients added to shopping list!');
  }

}

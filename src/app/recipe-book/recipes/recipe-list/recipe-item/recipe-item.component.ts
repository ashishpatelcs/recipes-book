import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/recipe-book/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('recipeItem') recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  selectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}

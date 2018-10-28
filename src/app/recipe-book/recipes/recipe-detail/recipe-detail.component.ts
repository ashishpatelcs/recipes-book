import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('recipeItem') recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}

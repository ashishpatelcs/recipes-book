import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe', 'http://www.indianfoodforever.com/images/rainy-recipes.jpg'),
    new Recipe('Paratha', 'This is paratha recipe',
    'https://media.gettyimages.com/photos/indian-breakfast-in-goa-picture-id511910426?s=612x612')
  ];

  constructor() { }

  ngOnInit() {
  }

}

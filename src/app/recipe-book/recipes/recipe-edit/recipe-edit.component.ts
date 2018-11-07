import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  public id: number;
  public name: string;
  public description: string;
  public imgpath: string;
  public ingredients = [];
  public editMode = false;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      const recipe = this.recipeService.getRecipeById(this.id);
      this.id = recipe.id;
      this.name = recipe.name;
      this.description = recipe.description;
      this.imgpath = recipe.imagePath;
      this.ingredients = recipe.ingredients;
    });
  }

}

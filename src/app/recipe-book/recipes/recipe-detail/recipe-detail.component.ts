import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../../recipe.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;

  constructor(private recipeService: RecipeService, private toastr: ToastrService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipe = this.recipeService.getRecipeById(params['id']);
    });
  }

  addToShoppingList() {
    this.recipeService.toShoppingList(this.recipe.ingredients);
    this.toastr.success('Recipe ingredients added to shopping list!');
  }

  onEditRecipe() {
    this.router.navigate(['../', 'edit'], {relativeTo: this.route});
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecipeListComponent, RecipeItemComponent, RecipeDetailComponent, RecipesComponent]
})
export class RecipeBookModule { }

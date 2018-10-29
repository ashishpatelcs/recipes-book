import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeService } from './recipe.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent
  ],
  exports: [RecipesComponent],
  providers: [RecipeService]
})
export class RecipeBookModule { }

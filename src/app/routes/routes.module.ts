import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from '../shopping-list/shopping-list/shopping-list.component';
import { RecipesComponent } from '../recipe-book/recipes/recipes.component';
import { RecipeDetailComponent } from '../recipe-book/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipe-book/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from '../recipe-book/recipes/recipe-start/recipe-start.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent,
  children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id/details', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutesModule { }

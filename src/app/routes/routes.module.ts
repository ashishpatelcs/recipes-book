import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list/shopping-list.component';
import { RecipesComponent } from '../recipe-book/recipes/recipes.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'shoppinglist', component: ShoppingListComponent}
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

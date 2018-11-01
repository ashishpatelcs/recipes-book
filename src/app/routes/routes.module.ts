import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { RecipeListComponent } from '../recipe-book/recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list/shopping-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'recipes', component: RecipeListComponent },
      { path: 'shoppinglist', component: ShoppingListComponent }
    ])
  ],
  declarations: []
})
export class RoutesModule { }

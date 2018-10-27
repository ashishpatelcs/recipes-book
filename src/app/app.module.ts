import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipeBookModule } from './recipe-book/recipe-book.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot([

    ]),
    BrowserModule,
    ShoppingListModule,
    RecipeBookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

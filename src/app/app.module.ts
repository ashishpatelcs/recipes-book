import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipeBookModule } from './recipe-book/recipe-book.module';
import { SampleComponent } from './sample/sample.component';
import { CockpitComponent } from './sample/cockpit/cockpit.component';
import { ServersComponent } from './sample/servers/servers.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SampleComponent,
    CockpitComponent,
    ServersComponent,
    DropdownDirective
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'sample', component: SampleComponent}
    ]),
    BrowserModule,
    ShoppingListModule,
    RecipeBookModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

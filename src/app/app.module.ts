import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from '../../node_modules/ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SampleComponent,
    CockpitComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShoppingListModule,
    RecipeBookModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ToastrModule.forRoot({ })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

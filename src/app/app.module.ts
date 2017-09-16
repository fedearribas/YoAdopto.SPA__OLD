import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './users/user/user.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LostComponent } from './lost/lost.component';
import { AdoptionItemComponent } from './adoptions/adoption-list/adoption-item/adoption-item.component';
import { AdoptionListComponent } from './adoptions/adoption-list/adoption-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdoptionsComponent,
    HomeComponent,
    HeaderComponent,
    LostComponent,
    AdoptionItemComponent,
    AdoptionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

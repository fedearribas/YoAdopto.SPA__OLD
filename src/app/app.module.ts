import { AdoptionsService } from './adoptions/adoptions.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './users/user/user.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LostComponent } from './lost/lost.component';
import { AdoptionItemComponent } from './adoptions/adoption-list/adoption-item/adoption-item.component';
import { AdoptionListComponent } from './adoptions/adoption-list/adoption-list.component';
import { AdoptionDetailComponent } from './adoptions/adoption-detail/adoption-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AdoptionFormComponent } from './adoptions/adoption-form/adoption-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdoptionsComponent,
    HomeComponent,
    HeaderComponent,
    LostComponent,
    AdoptionItemComponent,
    AdoptionListComponent,
    AdoptionDetailComponent,
    AdoptionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AdoptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

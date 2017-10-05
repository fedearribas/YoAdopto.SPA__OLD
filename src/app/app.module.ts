import { CoreModule } from './core/core.module';
import { AdoptionsModule } from './adoptions/adoptions.module';
import { MissingModule } from './missing/missing.module';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MarkedAdoptionsComponent } from './users/marked-adoptions/marked-adoptions.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MarkedAdoptionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    AdoptionsModule,
    MissingModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

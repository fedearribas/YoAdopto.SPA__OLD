import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './users/profile/profile.component';
import { ProfileMenuComponent } from './users/profile/profile-menu/profile-menu.component';
import { ProfileSettingsComponent } from './users/profile/profile-settings/profile-settings.component';
import { UpdatingDummyComponent } from './users/profile/profile-settings/updating-dummy/updating-dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ProfileComponent,
    ProfileMenuComponent,
    ProfileSettingsComponent,
    UpdatingDummyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

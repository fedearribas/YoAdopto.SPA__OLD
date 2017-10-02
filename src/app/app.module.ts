import { LocationService } from './shared/location.service';
import { MarkedAdoptionsService } from './users/marked-adoptions/marked-adoptions.service';
import { CommentsService } from './comments/comments.service';
import { AuthService } from './auth/auth.service';
import { AdoptionsService } from './adoptions/adoptions.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LostComponent } from './lost/lost.component';
import { AdoptionItemComponent } from './adoptions/adoption-list/adoption-item/adoption-item.component';
import { AdoptionListComponent } from './adoptions/adoption-list/adoption-list.component';
import { AdoptionDetailComponent } from './adoptions/adoption-detail/adoption-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AdoptionFormComponent } from './adoptions/adoption-form/adoption-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Angular2TokenService } from 'angular2-token';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CommentNewComponent } from './comments/comment-new/comment-new.component';
import { CommentItemComponent } from './comments/comment-list/comment-item/comment-item.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MarkedAdoptionsComponent } from './users/marked-adoptions/marked-adoptions.component';
import { AdoptionsContainerComponent } from './adoptions/adoptions-container/adoptions-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AdoptionsComponent,
    HomeComponent,
    HeaderComponent,
    LostComponent,
    AdoptionItemComponent,
    AdoptionListComponent,
    AdoptionDetailComponent,
    AdoptionFormComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    CommentsComponent,
    CommentListComponent,
    CommentNewComponent,
    CommentItemComponent,
    MarkedAdoptionsComponent,
    AdoptionsContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    AdoptionsService,
    Angular2TokenService,
    AuthService,
    CommentsService,
    MarkedAdoptionsService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

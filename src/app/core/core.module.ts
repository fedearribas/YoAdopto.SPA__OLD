import { MarkedPublicationsService } from './../users/marked-publications/marked-publications.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MissingService } from './../missing/missing.service';
import { LocationService } from './../shared/location.service';
import { CommentsService } from './../comments/comments.service';
import { Angular2TokenService } from 'angular2-token';
import { AdoptionsService } from './../adoptions/adoptions.service';
import { AuthService } from './../auth/auth.service';
import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    AdoptionsService,
    Angular2TokenService,
    AuthService,
    CommentsService,
    MarkedPublicationsService,
    LocationService,
    MissingService
  ]
})
export class CoreModule {

}

import { SharedModule } from './../shared/shared.module';
import { MissingComponent } from './missing.component';
import { MissingRoutingModule } from './missing-routing.module';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    MissingComponent
  ],
  imports: [
    MissingRoutingModule,
    SharedModule
  ]
})
export class MissingModule {
}

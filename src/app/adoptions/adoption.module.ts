import { SharedModule } from './../shared/shared.module';
import { AdoptionsRoutingModule } from './adoptions-routing.module';
import { NgModule } from '@angular/core';
import { AdoptionsComponent } from './adoptions.component';

@NgModule({
  declarations: [
    AdoptionsComponent
  ],
  imports: [
    AdoptionsRoutingModule,
    SharedModule
  ]
})
export class AdoptionModule {
}

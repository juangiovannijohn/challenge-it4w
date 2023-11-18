import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { DigimonsRoutingModule } from './digimons-routing.module';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DigimonsRoutingModule
  ]
})
export class DigimonsModule { }

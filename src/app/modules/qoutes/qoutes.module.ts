import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QoutesRoutingModule } from './qoutes-routing.module';
import { QoutesComponent } from './qoutes.component';
import { AllQoutesComponent } from './all-qoutes/all-qoutes.component';
import { SingleQouteComponent } from './single-qoute/single-qoute.component';


@NgModule({
  declarations: [
    QoutesComponent,
    AllQoutesComponent,
    SingleQouteComponent,
  ],
  imports: [
    CommonModule,
    QoutesRoutingModule
  ]
})
export class QoutesModule { }

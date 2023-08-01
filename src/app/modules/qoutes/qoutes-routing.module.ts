import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QoutesComponent } from './qoutes.component';
import { AllQoutesComponent } from './all-qoutes/all-qoutes.component';

const routes: Routes = [
  {
    path: '',
    component: AllQoutesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QoutesRoutingModule { }

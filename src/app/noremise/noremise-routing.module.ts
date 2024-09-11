import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoremisePage } from './noremise.page';

const routes: Routes = [
  {
    path: '',
    component: NoremisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoremisePageRoutingModule {}

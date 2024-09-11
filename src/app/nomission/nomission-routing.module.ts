import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NomissionPage } from './nomission.page';

const routes: Routes = [
  {
    path: '',
    component: NomissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomissionPageRoutingModule {}

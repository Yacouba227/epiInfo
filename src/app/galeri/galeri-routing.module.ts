import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriPage } from './galeri.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriPageRoutingModule {}

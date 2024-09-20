import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotdgPage } from './motdg.page';

const routes: Routes = [
  {
    path: '',
    component: MotdgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotdgPageRoutingModule {}

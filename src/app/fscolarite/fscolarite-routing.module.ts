import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FscolaritePage } from './fscolarite.page';

const routes: Routes = [
  {
    path: '',
    component: FscolaritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FscolaritePageRoutingModule {}

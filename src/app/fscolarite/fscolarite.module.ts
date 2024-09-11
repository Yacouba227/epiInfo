import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FscolaritePageRoutingModule } from './fscolarite-routing.module';

import { FscolaritePage } from './fscolarite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FscolaritePageRoutingModule
  ],
  declarations: [FscolaritePage]
})
export class FscolaritePageModule {}

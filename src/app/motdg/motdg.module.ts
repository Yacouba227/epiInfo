import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotdgPageRoutingModule } from './motdg-routing.module';

import { MotdgPage } from './motdg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotdgPageRoutingModule
  ],
  declarations: [MotdgPage]
})
export class MotdgPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PourcentagePageRoutingModule } from './pourcentage-routing.module';

import { PourcentagePage } from './pourcentage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PourcentagePageRoutingModule
  ],
  declarations: [PourcentagePage]
})
export class PourcentagePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentreacaPageRoutingModule } from './rentreaca-routing.module';

import { RentreacaPage } from './rentreaca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentreacaPageRoutingModule
  ],
  declarations: [RentreacaPage]
})
export class RentreacaPageModule {}

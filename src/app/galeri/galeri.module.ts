import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriPageRoutingModule } from './galeri-routing.module';

import { GaleriPage } from './galeri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriPageRoutingModule
  ],
  declarations: [GaleriPage]
})
export class GaleriPageModule {}

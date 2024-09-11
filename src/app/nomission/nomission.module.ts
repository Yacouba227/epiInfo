import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomissionPageRoutingModule } from './nomission-routing.module';

import { NomissionPage } from './nomission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NomissionPageRoutingModule
  ],
  declarations: [NomissionPage]
})
export class NomissionPageModule {}

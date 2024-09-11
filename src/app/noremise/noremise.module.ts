import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoremisePageRoutingModule } from './noremise-routing.module';

import { NoremisePage } from './noremise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoremisePageRoutingModule
  ],
  declarations: [NoremisePage]
})
export class NoremisePageModule {}

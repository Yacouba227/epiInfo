import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotdgPageRoutingModule } from './motdg-routing.module';

import { MotdgPage } from './motdg.page';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotdgPageRoutingModule
  ],
  declarations: [MotdgPage],
  providers: [PhotoViewer]
})
export class MotdgPageModule {}

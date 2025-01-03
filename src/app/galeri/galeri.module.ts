/* import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, Platform } from '@ionic/angular';

import { GaleriPageRoutingModule } from './galeri-routing.module';

import { GaleriPage } from './galeri.page';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriPageRoutingModule
  ],
  declarations: [GaleriPage],
  providers: [PhotoViewer]
})



export class GaleriPageModule { 


  images: string[] = [
    'assets/images/epi/e8.jpg',
    'assets/images/epi/e8.jpg',
    'assets/images/epi/e8.jpg',
  ];

  constructor(public platform: Platform, private photoViewer: PhotoViewer) {}

  viewImage(image: string) {
    if (this.platform.is('cordova')) {
      this.photoViewer.show(image, 'Image', { share: true });
    } else {
      console.log('Photo Viewer is available only on real devices.');
    }
  }


}
 */



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriPageRoutingModule } from './galeri-routing.module';
import { GaleriPage } from './galeri.page';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriPageRoutingModule,
  ],
  declarations: [GaleriPage],
  providers: [PhotoViewer],
})
export class GaleriPageModule {}

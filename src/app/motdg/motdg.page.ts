import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageViewerPage } from '../image-viewer/image-viewer.page';

@Component({
  selector: 'app-motdg',
  templateUrl: './motdg.page.html',
  styleUrls: ['./motdg.page.scss'],
})
export class MotdgPage /* implements OnInit */ {

  images = [
    'assets/images/epi/image14.jpg',
  ]

  constructor(private modalController: ModalController) { }

  async viewImage(image: string) {
    const modal = await this.modalController.create({
      component: ImageViewerPage,
      componentProps:{
        imageSrc: image,
      },
    });
    return await modal.present();
  }
  /* ngOnInit() {
  } */

}

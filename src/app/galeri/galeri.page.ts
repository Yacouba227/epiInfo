/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeri',
  templateUrl: './galeri.page.html',
  styleUrls: ['./galeri.page.scss'],
})
export class GaleriPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
 */
/* 
import { Component } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-galeri',
  templateUrl: './galeri.page.html',
  styleUrls: ['./galeri.page.scss'],
})
export class GaleriPage {
  // Ajoutez cette propriété pour éviter l'erreur
  images: string[] = [
    'assets/images/epi/e11.jpg',
    'assets/images/epi/e11.jpg',
    'assets/images/epi/e11.jpg',
    'assets/images/epi/e11.jpg',
    'assets/images/epi/e11.jpg',
    'assets/images/epi/e11.jpg',
  ];

  constructor(private platform: Platform, private photoViewer: PhotoViewer) {}

  // Ajoutez cette méthode pour éviter l'erreur
  viewImage(image: string) {
    if (this.platform.is('cordova')) {
      this.photoViewer.show(image, 'Image', { share: true });
    } else {
      console.log('Photo Viewer disponible uniquement sur un appareil réel.');
    }
  }
}
 */


import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageViewerPage } from '../image-viewer/image-viewer.page'; // Importez le modal de visualisation

@Component({
  selector: 'app-galeri',
  templateUrl: './galeri.page.html',
  styleUrls: ['./galeri.page.scss'],
})
export class GaleriPage {
  images = [
    'assets/images/epi/image1.jpg',
    'assets/images/epi/image2.jpg',
    'assets/images/epi/image3.jpg',
    'assets/images/epi/image4.jpg',
    'assets/images/epi/image5.jpg',
    'assets/images/epi/image6.jpg',
    'assets/images/epi/image7.jpg',
    'assets/images/epi/image8.jpg',
    'assets/images/epi/image9.jpg',
    'assets/images/epi/image10.jpg',
    'assets/images/epi/image11.jpg',
    'assets/images/epi/image12.jpg',
    'assets/images/epi/image13.jpg',
    'assets/images/epi/image14.jpg',
    'assets/images/epi/image15.jpg',
    'assets/images/epi/image16.jpg',
    'assets/images/epi/image17.jpg',
    'assets/images/epi/image18.jpg',
    'assets/images/epi/image19.jpg',
    'assets/images/epi/image20.jpg',
    'assets/images/epi/image21.jpg',
    'assets/images/epi/image22.jpg',
    'assets/images/epi/image23.jpg',
    'assets/images/epi/image24.jpg',
    'assets/images/epi/image25.jpg',
    'assets/images/epi/image26.jpg',
    'assets/images/epi/image27.jpg',
    'assets/images/epi/image28.jpg',
    'assets/images/epi/image29.jpg',
    'assets/images/epi/image30.jpg',
    'assets/images/epi/image31.jpg',
    'assets/images/epi/image32.jpg',
    'assets/images/epi/image33.jpg',
    'assets/images/epi/image34.jpg',
    'assets/images/epi/image35.jpg',
    'assets/images/epi/image36.jpg',
  ];

  constructor(private modalController: ModalController) {}

  async viewImage(image: string) {
    const modal = await this.modalController.create({
      component: ImageViewerPage,
      componentProps: {
        imageSrc: image,
      },
    });
    return await modal.present();
  }
}

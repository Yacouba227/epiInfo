import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'nomission',
    loadChildren: () => import('./nomission/nomission.module').then( m => m.NomissionPageModule)
  },
  {
    path: 'noremise',
    loadChildren: () => import('./noremise/noremise.module').then( m => m.NoremisePageModule)
  },
  {
    path: 'rentreaca',
    loadChildren: () => import('./rentreaca/rentreaca.module').then( m => m.RentreacaPageModule)
  },
  {
    path: 'filiere',
    loadChildren: () => import('./filiere/filiere.module').then( m => m.FilierePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'fscolarite',
    loadChildren: () => import('./fscolarite/fscolarite.module').then( m => m.FscolaritePageModule)
  },
  {
    path: 'commentaire',
    loadChildren: () => import('./commentaire/commentaire.module').then( m => m.CommentairePageModule)
  },
  {
    path: 'galeri',
    loadChildren: () => import('./galeri/galeri.module').then( m => m.GaleriPageModule)
  },
  {
    path: 'versement',
    loadChildren: () => import('./versement/versement.module').then( m => m.VersementPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

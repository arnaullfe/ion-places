import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage
  },
  {
    path: 'place-detail',
    loadChildren: () => import('./place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  },
  {
    path: 'place-add',
    loadChildren: () => import('./place-add/place-add.module').then( m => m.PlaceAddPageModule)
  },
  {
    path: 'place-edit',
    loadChildren: () => import('./place-edit/place-edit.module').then( m => m.PlaceEditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}

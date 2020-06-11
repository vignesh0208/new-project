import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagePagePage } from './image-page.page';

const routes: Routes = [
  {
    path: '',
    component: ImagePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagePagePageRoutingModule {}

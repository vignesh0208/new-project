import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostContentPage } from './post-content.page';

const routes: Routes = [
  {
    path: '',
    component: PostContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostContentPageRoutingModule {}

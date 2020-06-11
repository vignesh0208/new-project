import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleDescPage } from './title-desc.page';

const routes: Routes = [
  {
    path: '',
    component: TitleDescPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleDescPageRoutingModule {}

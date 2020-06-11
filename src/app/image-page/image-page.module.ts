import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagePagePageRoutingModule } from './image-page-routing.module';

import { ImagePagePage } from './image-page.page';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagePagePageRoutingModule,
    NgxIonicImageViewerModule
  ],
  declarations: [ImagePagePage]
})
export class ImagePagePageModule {}

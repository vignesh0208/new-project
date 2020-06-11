import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostContentPageRoutingModule } from './post-content-routing.module';

import { PostContentPage } from './post-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostContentPageRoutingModule
  ],
  declarations: [PostContentPage]
})
export class PostContentPageModule {}

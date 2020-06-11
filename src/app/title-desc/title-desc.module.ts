import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitleDescPageRoutingModule } from './title-desc-routing.module';

import { TitleDescPage } from './title-desc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitleDescPageRoutingModule
  ],
  declarations: [TitleDescPage]
})
export class TitleDescPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeSelectionPageRoutingModule } from './type-selection-routing.module';

import { TypeSelectionPage } from './type-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeSelectionPageRoutingModule
  ],
  declarations: [TypeSelectionPage]
})
export class TypeSelectionPageModule {}

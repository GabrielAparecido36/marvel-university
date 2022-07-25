import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NTTLoaderComponent } from './ntt-loader.component';

@NgModule({
  declarations: [
    NTTLoaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NTTLoaderComponent
  ]
})
export class NTTLoaderModule { }

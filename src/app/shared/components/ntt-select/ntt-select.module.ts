import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NTTLoaderModule } from '../ntt-loader/ntt-loader.module';
import { NTTSelectComponent } from './ntt-select.component';

@NgModule({
  declarations: [
    NTTSelectComponent
  ],
  imports: [
    CommonModule,
    NTTLoaderModule
  ],
  exports: [
    NTTSelectComponent
  ]
})
export class NTTSelectModule { }

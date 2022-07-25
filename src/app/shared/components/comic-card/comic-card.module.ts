import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComicCardComponent } from './comic-card.component';

@NgModule({
  declarations: [
    ComicCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ComicCardComponent,
  ]
})
export class ComicCardModule { }

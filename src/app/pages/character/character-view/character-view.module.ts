import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterViewRoutingModule, routedComponents } from './character-view-routing.module';

@NgModule({
  declarations: [
    ...routedComponents
  ],
  imports: [
    CommonModule,
    CharacterViewRoutingModule,
  ]
})
export class CharacterViewModule { }

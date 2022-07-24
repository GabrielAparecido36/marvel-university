import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule, routedComponents } from './character-routing.module';

@NgModule({
  declarations: [
    ...routedComponents
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
  ]
})
export class CharacterModule { }

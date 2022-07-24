import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListRoutingModule, routedComponents } from './character-list-routing.module';

@NgModule({
  declarations: [
    ...routedComponents
  ],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
  ]
})
export class CharacterListModule { }

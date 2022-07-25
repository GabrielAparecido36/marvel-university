import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListRoutingModule, routedComponents } from './character-list-routing.module';
import { CharacterCardModule } from 'src/app/shared/components/character-card/character-card.module';
import { NTTSelectModule } from 'src/app/shared/components/ntt-select/ntt-select.module';
import { NTTLoaderModule } from 'src/app/shared/components/ntt-loader/ntt-loader.module';

@NgModule({
  declarations: [
    ...routedComponents
  ],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
    CharacterCardModule,
    NTTSelectModule,
    NTTLoaderModule
  ]
})
export class CharacterListModule { }

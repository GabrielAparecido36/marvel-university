import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterViewRoutingModule, routedComponents } from './character-view-routing.module';
import { ComicCardModule } from 'src/app/shared/components/comic-card/comic-card.module';
import { NTTLoaderModule } from 'src/app/shared/components/ntt-loader/ntt-loader.module';
import { CharacterCardModule } from 'src/app/shared/components/character-card/character-card.module';

@NgModule({
  declarations: [
    ...routedComponents
  ],
  imports: [
    CommonModule,
    CharacterViewRoutingModule,
    CharacterCardModule,
    ComicCardModule,
    NTTLoaderModule
  ]
})
export class CharacterViewModule { }

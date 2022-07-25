import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/pages/character/character.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})

export class CharacterCardComponent implements OnInit {

  @Input() char!: ICharacter;
  constructor() { }

  ngOnInit(): void {
  }

}

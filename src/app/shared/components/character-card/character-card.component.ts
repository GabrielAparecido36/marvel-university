import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICharacter } from 'src/app/pages/character/character.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})

export class CharacterCardComponent {

  @Input() char!: ICharacter;
  @Input() cardList: boolean = false;
  @Input() description: boolean = false;
  constructor(private router: Router) { }

  public viewChar(): void {
    this.router.navigateByUrl(`pages/character/${this.char.id}/view`)
  }

}

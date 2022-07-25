import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ICharacter, ICharacterDataWrapper } from 'src/app/pages/character/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-ntt-select',
  templateUrl: './ntt-select.component.html',
  styleUrls: ['./ntt-select.component.scss']
})

export class NTTSelectComponent implements OnInit {

  public selectCharacter!: string | null;
  public offSet: number = 0;
  public loadedCharactes: ICharacter[] = [];
  public clicked: boolean = false;

  @Input() loading: boolean = false;
  @Output() selectChar = new EventEmitter<any>();
  @Output() cleanChar = new EventEmitter<any>();
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.downloadCharacters();
  }

  public downloadCharacters(offSet: number = 0) {
    this.characterService.getCharacter(`&offset=${offSet}`).subscribe((data: ICharacterDataWrapper) => {
      this.offSet = data?.data?.offset ? data?.data?.offset : 0;
      if (data.data?.results)
        this.loadedCharactes.push(...data.data?.results);
    });
  }

  public onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.downloadCharacters(this.offSet + 20)
    }
  }

  public selectionItem(char: ICharacter) {
    this.clicked = false;
    this.selectCharacter = char.name;
    this.selectChar.emit(char);
  }

  public clearCharacter() {
    this.selectCharacter = null;
    this.cleanChar.emit();
  }

  // @HostListener('focusout')
  // public desativeClick() {
  //   this.clicked = false;
  // }
}

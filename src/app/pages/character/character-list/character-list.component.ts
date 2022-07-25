import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { ICharacter, ICharacterDataWrapper } from '../character.interface';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  public offSet: number = 0;
  public data!: ICharacterDataWrapper;
  public loadedCharactes: ICharacter[] = [];
  public loading: boolean = true;
  public sortBy: boolean = true;
  public filter: string = '';
  public subs = new Subscription();
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.downloadCharacters();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public downloadCharacters(offSet: number = 0, params: string = '', clearChar: boolean = false) {
    this.loading = true;
    params += `&offset=${offSet}&orderBy=${this.sortBy ? '' : '-'}name&${this.filter}`
    this.subs.add(this.characterService.getCharacter(params).subscribe((data: ICharacterDataWrapper) => {
      this.data = data;
      this.offSet = this.data?.data?.offset ? this.data?.data?.offset : 0;
      if (clearChar) this.loadedCharactes = [];
      if (this.data.data?.results)
        this.loadedCharactes.push(...this.data.data?.results);
      this.loading = false;
    }));
  }

  public onScroll(event: any) {
    if (this.loadedCharactes.length != this.data.data?.total && (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight)) {
      this.loading = true;
      this.downloadCharacters(this.offSet + 20)
    }
  }

  public searchCharacter(char: ICharacter) {
    this.filter = `&name=${char.name}`;
    this.downloadCharacters(0, ``, true)
  }

  public updateSortBy() {
    this.sortBy = !this.sortBy;
    this.downloadCharacters(0, '', true);
  }

  public cleanChar() {
    this.filter = '';
    this.downloadCharacters(0, '', true);
  }
}

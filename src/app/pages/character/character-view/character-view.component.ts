import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { IComic, IComicDataWrapper } from 'src/app/shared/interfaces/comic.interface';
import { ICharacter, ICharacterDataWrapper } from '../character.interface';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss']
})
export class CharacterViewComponent implements OnInit {

  public id: number;
  public data!: ICharacterDataWrapper;
  public character!: ICharacter;
  public dataComic!: IComicDataWrapper;
  public comics: IComic[] = [];
  public offSet: number = 0;
  public loading: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService) {
    this.id = this.activatedRoute.snapshot?.params?.['id'];
  }

  ngOnInit(): void {
    this.downloadCharacters();
    this.downloadComics();
  }

  public downloadCharacters() {
    this.characterService.getCharacterById(this.id).subscribe((data: ICharacterDataWrapper) => {
      this.data = data;
      if (data?.data?.results[0])
        this.character = data.data.results[0];
    });
  }
  public downloadComics(offSet: number = 0) {
    const params = `&offset=${offSet}&`
    this.characterService.getCharacterComicsById(this.id, params).subscribe((data: IComicDataWrapper) => {
      this.dataComic = data;
      if (data.data?.results)
        this.comics.push(...data.data?.results);
    });
  }

  public onScroll(event: any) {
    if (this.comics.length != this.data.data?.total && (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight)) {
      this.loading = true;
      this.downloadComics(this.offSet + 20)
    }
  }

  public backPage(){
    history.back();
  }

}

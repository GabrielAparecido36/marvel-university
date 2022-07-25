import { Component, Input, OnInit } from '@angular/core';
import { IComic } from '../../interfaces/comic.interface';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss']
})

export class ComicCardComponent {

  @Input() comic!: IComic;
  constructor() { }

}

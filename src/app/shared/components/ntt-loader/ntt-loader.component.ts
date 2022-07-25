import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-ntt-loader',
  templateUrl: './ntt-loader.component.html',
  styleUrls: ['./ntt-loader.component.scss']
})

export class NTTLoaderComponent {

  @Input() little: boolean = false;

}

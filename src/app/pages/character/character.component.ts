import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  template: `
  <div style="height: 100%; width: 100%;">
    <router-outlet></router-outlet>
  </div>`,
})
export class CharacterComponent {
}

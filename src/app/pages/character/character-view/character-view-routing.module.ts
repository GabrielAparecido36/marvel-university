import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterViewComponent } from './character-view.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterViewComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterViewRoutingModule { }

export const routedComponents = [
  CharacterViewComponent
];

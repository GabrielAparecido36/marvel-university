import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./character-list/character-list.module')
          .then(m => m.CharacterListModule),
      },
      {
        path: ':id/view',
        loadChildren: () => import('./character-view/character-view.module')
          .then(m => m.CharacterViewModule),
      },
      {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }

export const routedComponents = [
  CharacterComponent
];

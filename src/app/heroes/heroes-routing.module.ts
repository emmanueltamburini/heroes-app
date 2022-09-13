import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { AllHeroesComponent } from './pages/all-heroes/all-heroes.component';
import { HeroByIdComponent } from './pages/hero-by-id/hero-by-id.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'allHeroes',
        component: AllHeroesComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'edit/:id',
        component: AddComponent
      },
      {
        path: 'seatch',
        component: SearchComponent
      },
      {
        path: ':id',
        component: HeroByIdComponent
      },
      {
        path: '**',
        redirectTo: 'allHeroes'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }

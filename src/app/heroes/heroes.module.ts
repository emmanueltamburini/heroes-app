import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroByIdComponent } from './pages/hero-by-id/hero-by-id.component';
import { HomeComponent } from './pages/home/home.component';
import { AllHeroesComponent } from './pages/all-heroes/all-heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroByIdComponent,
    HomeComponent,
    AllHeroesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }

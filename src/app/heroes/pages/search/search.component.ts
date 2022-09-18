import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  public query: string = '';

  public heroes: Hero[] = [];

  public selectedHero!: Hero | undefined;

  constructor(private heroesService: HeroesService) { }

  public search():void {
    this.heroesService.getHereosByQuery(this.query.trim())
      .subscribe(heroes => this.heroes = heroes);
  }

  public selectedOption(event: MatAutocompleteSelectedEvent): void {
    if (event.option.value === '') {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.query = hero.superhero;

    this.heroesService.getHereosById(hero.id!)
      .subscribe(hero => this.selectedHero = hero);

  }
}

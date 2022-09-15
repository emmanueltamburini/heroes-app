import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
    }
  `]
})
export class AllHeroesComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHereos().subscribe(response => {
      this.heroes = response;
    });
  }

}

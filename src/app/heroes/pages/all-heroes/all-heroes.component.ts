import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html'
})
export class AllHeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHereos().subscribe(response => console.log(response));
  }

}

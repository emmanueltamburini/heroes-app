import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-by-id',
  templateUrl: './hero-by-id.component.html'
})
export class HeroByIdComponent implements OnInit {

  public hero!: Hero;

  constructor(private activateRoute: ActivatedRoute, private heroeServices:HeroesService) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.heroeServices.getHereosById(id)),
    )
    .subscribe(hero => this.hero = hero)
  }

}

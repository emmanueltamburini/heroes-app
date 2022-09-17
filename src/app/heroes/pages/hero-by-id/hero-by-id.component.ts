import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-by-id',
  templateUrl: './hero-by-id.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 10px;
      }
    `
  ]
})
export class HeroByIdComponent implements OnInit {

  public hero!: Hero;

  constructor(private activateRoute: ActivatedRoute, private heroeServices:HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.heroeServices.getHereosById(id)),
    )
    .subscribe(hero => this.hero = hero)
  }

  public goBack () {
    this.router.navigate(['/heroes/allHeroes'])
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 10px;
    }
  `]
})
export class AddComponent implements OnInit {
  public hero: Hero = {
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    superhero: ''
  };

  public publishers: {id: string, description:string}[] = [
    {
      id: 'DC Comics',
      description: 'DC-Comics'
    },
    {
      id: 'Marvel Comics',
      description: 'Marvel-Comics'
    }
  ]

  constructor(private heroesServices: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const editView: boolean = this.router.url.includes('edit');

    if(editView) {
      this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesServices.getHereosById(id)),
      )
      .subscribe(hero => this.hero = hero);
    }

  }

  public onSubmit(): void {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }

    if(this.hero.id) {
      this.heroesServices.updateHero(this.hero.id, this.hero)
        .subscribe(updatedHero => this.hero = updatedHero);
    } else {
      this.heroesServices.createHero(this.hero)
      .subscribe(createdHero => this.hero = createdHero);
    }

    this.router.navigate([`/heroes/allHeroes`]);
  }

  public onDelete(): void {
    this.heroesServices.deleteHero(this.hero.id!).subscribe(() => this.router.navigate([`/heroes/allHeroes`]));
  }
}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private heroesServices: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

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
        .subscribe(updatedHero => this._finish('Hero updated', updatedHero));
    } else {
      this.heroesServices.createHero(this.hero)
      .subscribe(createdHero => this._finish('Hero updated', createdHero));
    }

    this.router.navigate([`/heroes/allHeroes`]);
  }

  public onDelete(): void {
    this.heroesServices.deleteHero(this.hero.id!).subscribe(() => this._finish('Hero deleted'));
  }

  public onImageChange(): void {
    this.hero = {...this.hero};
  }

  private _finish(message: string, hero?:Hero): void {
    if (hero) {
      this.hero = hero;
    }
    this._showSnackBar(message);
    this.router.navigate([`/heroes/allHeroes`]);

  }

  private _showSnackBar(message: string): void {
    this.snackBar.open(message, 'ok', {
      duration: 5000
    });
  }
}

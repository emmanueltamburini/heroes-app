import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [`
  mat-card {
    margin-top: 20px;
  }
`]
})
export class HeroCardComponent {

  constructor(private router: Router) {}

  @Input('hero')
  public hero!: Hero;

  // Otra forma
  public onEdit(): void {
    this.router.navigate([`heroes/edit/${this.hero.id}`]);
  }

  public onViewMore(): void {
    this.router.navigate([`heroes/${this.hero.id}`]);
  }

}

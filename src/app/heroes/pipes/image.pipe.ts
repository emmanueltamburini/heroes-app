import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'image',
  pure: true
})
export class ImagePipe implements PipeTransform {
  private isValidHttpUrl(value: string): boolean {

    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  }

  transform(hero: Hero): string {
    console.log('disparo');
    if (!hero.id) {
      return `assets/no-image.png`;
    }

    if (hero.alt_image) {
      return this.isValidHttpUrl(hero.alt_image) ? hero.alt_image : `assets/no-image.png`;
    }
    return `assets/heroes/${hero.id}.jpg`;
  }

}

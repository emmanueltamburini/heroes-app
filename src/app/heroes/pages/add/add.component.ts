import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  public hero: Hero = {
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    superhero: ''
  };

  public publishers = [
    {
      id: 'DC Comics',
      description: 'DC-Comics'
    },
    {
      id: 'Marvel Comics',
      description: 'Marvel-Comics'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

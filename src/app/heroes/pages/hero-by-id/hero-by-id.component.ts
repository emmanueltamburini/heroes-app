import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-by-id',
  templateUrl: './hero-by-id.component.html'
})
export class HeroByIdComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params
    .subscribe(({id}) => console.log(id))
  }

}

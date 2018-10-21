import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes$: Object;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getHeroes().subscribe(
      api => this.heroes$ = api
    );
  }

}

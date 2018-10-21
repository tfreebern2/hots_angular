import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  hero$: Object;

  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.route.params.subscribe( params => this.hero$ = params.name );
  }

  ngOnInit() {
    this.api.getHero(this.hero$).subscribe(
      api => this.hero$ = api
    );
  }

}

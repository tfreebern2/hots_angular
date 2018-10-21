import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get('https://hotsapi.net/api/v1/heroes');
  }

  getHero(heroName) {
    return this.http.get('https://hotsapi.net/api/v1/heroes/' + heroName );
  }
}

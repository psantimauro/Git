import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //URL for heros api
  private heroesUrl = 'api/heroes'; 
  constructor(
    private messageService: MessageService,
    private http: HttpClient ) 
    { }

  getHeroes():Observable<Hero[]> {
    this.log('fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    //TODO send the message _after_fetching the hero
    this.messageService.add(`HeroService: fetch hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }
}

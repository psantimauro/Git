import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes = [
      
        {id: 10, name: 'Mr Wombat'},
        {id: 12, name: 'Blackout'},
        {id: 13, name: 'The sHocker'},
        {id: 14, name: 'Ms Tasty'},
        {id: 15, name: 'Johnny Rotten'},
        {id: 16, name: 'Chombawamba'},
        {id: 17, name: 'Blasterman'},
    ];
    return {heroes};
  }

  /* override genId method to ensure a hero always has an id.
   * if heroes array is empty, the method will return an inital value of 18
   * else the max id+1
  */
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 18;
  }
}

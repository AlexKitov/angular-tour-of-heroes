import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message __after__ fetchung the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }

}

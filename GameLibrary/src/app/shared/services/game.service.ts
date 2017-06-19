import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import {Picture} from "../models/picture.model";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";


@Injectable()
export class GameService {
  constructor( private http: Http)
  {

  }

  getGames(): Observable<Game[]> {
    return this.http.get("assets/games/static.game.data.json").map(res => res.json());
  }

  getGame(id: number): Observable<Game> {
    return this.http.get("assets/games/static.game.data.json").map(res => res.json().find(res => res.id == id));
  }
}

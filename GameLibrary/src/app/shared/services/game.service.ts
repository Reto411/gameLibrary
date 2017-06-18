import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import {Picture} from "../models/picture.model";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";




@Injectable()
export class GameService {
  constructor( private http: Http)
  {

  }

  getGames(): Observable<Game[]> {
    return this.http.get("../assets/games/statig.game.data.json")
  }
}

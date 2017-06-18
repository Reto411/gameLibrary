import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import {Picture} from "../models/picture.model";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";


const STATIC_GAME_LIST_URL = "http://m152.gibz-informatik.ch/sj16_17/infa3a/team02/" + "static.game.data.json";


@Injectable()
export class GameService {
  constructor( private http: Http)
  {

  }

  getGames(): Observable<Game[]> {
    return this.http.get("assets/games/static.game.data.json").map(res => res.json());
  }
}

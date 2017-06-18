import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import {Picture} from "../models/picture.model";




@Injectable()
export class GameService {
  getGames(): Promise<Game[]> {

  }
}

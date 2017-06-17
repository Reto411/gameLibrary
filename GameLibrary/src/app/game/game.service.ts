import { Injectable } from '@angular/core';
import { Game } from './game.model';

const GAMESMOCKS: Game[] = [
  {id: 1, name:"Crusader Kings II"},
  {id: 2, name:"Halo Reach"},
  {id: 3, name:"League of Faggots"}
];

@Injectable()
export class GameService {
  getGames(): Promise<Game[]> {
    return Promise.resolve(GAMESMOCKS);
  }
}

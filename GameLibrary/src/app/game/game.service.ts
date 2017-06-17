import { Injectable } from '@angular/core';
import { Game } from './game.model';

const GAMESMOCKS: Game[] = [
  {id: 1, name: "Crusader Kings II"},
  {id: 2, name: "Halo Reach"},
  {id: 3, name: "League of Faggots"},
  {id: 4, name: "Red Orchestra II: Eastern Front"},
  {id: 5, name: "PLAYERSUNKNOWNS BATTLEGROUND"},
  {id: 6, name: "Stardew Valley"},
  {id: 7, name: "Stronghold HD"},
  {id: 8, name: "The Witcher 3: Wild Hunt"}
];

@Injectable()
export class GameService {
  getGames(): Promise<Game[]> {
    return Promise.resolve(GAMESMOCKS);
  }
}

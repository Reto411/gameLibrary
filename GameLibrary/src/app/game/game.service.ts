import { Injectable } from '@angular/core';
import { Game } from './game.model';

const GAMESMOCKS: Game[] = [
  {id: 1, name: "Crusader Kings II", dashboardPicturePath: "../assets/games/leagueoflegends/PNG_00b235ea_55b4_43db_aad3_75bad274a1f8", picturesPaths: [""], videoPaths: [""]},
  {id: 2, name: "Halo Reach"},
  {id: 3, name: "League of Faggots", dashboardPicturePath: "../assets/games/leagueoflegends/PNG_00b235ea_55b4_43db_aad3_75bad274a1f8"},
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

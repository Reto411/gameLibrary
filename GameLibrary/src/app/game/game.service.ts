import { Injectable } from '@angular/core';
import { Game } from './game.model';

const GAMESMOCKS: Game[] = [
  {id: 1, name: "Crusader Kings II", dashboardPicturePath: "../assets/games/leagueoflegends/PNG_00b235ea_55b4_43db_aad3_75bad274a1f8", videoPaths: [""], picturesPaths: [""]},
  {id: 2, name: "Halo Reach", dashboardPicturePath: "../assets/games/leagueoflegends/PNG_00b235ea_55b4_43db_aad3_75bad274a1f8", videoPaths: [""], picturesPaths: [""]},
  {id: 3, name: "League of Faggots", dashboardPicturePath: "../assets/games/leagueoflegends/PNG_00b235ea_55b4_43db_aad3_75bad274a1f8", videoPaths: [""], picturesPaths: [""]},
  {id: 4, name: "Red Orchestra II: Eastern Front", dashboardPicturePath: "../assets/games/leagueoflegends/PNG_00b235ea_55b4_43db_aad3_75bad274a1f8", videoPaths: [""], picturesPaths: [""]},
  {id: 5, name: "PLAYERSUNKNOWNS BATTLEGROUND", dashboardPicturePath: "../assets/games/leagueoflegends/PNG_00b235ea_55b4_43db_aad3_75bad274a1f8", videoPaths: [""], picturesPaths: [""]},
  {id: 6, name: "Stardew Valley", dashboardPicturePath: "../assets/games/leagueoflegends/PNG_00b235ea_55b4_43db_aad3_75bad274a1f8", videoPaths: [""], picturesPaths: [""]},
  {id: 7, name: "Stronghold HD", dashboardPicturePath: "../assets/games/leagueoflegends/PNG_00b235ea_55b4_43db_aad3_75bad274a1f8", videoPaths: [""], picturesPaths: [""]},
  {id: 8, name: "The Witcher 3: Wild Hunt", dashboardPicturePath: "../assets/games/leagueoflegends/PNG_00b235ea_55b4_43db_aad3_75bad274a1f8", videoPaths: [""], picturesPaths: [""]}
];

@Injectable()
export class GameService {
  getGames(): Promise<Game[]> {
    return Promise.resolve(GAMESMOCKS);
  }
}

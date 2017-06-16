import { Component } from '@angular/core';
import {GameComponent} from "./game/game.component";

const GAMES: GameComponent = [
  {},
  {},
  {},
  {},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A list of fantastic games';
  GameComponents = GAMES;
}

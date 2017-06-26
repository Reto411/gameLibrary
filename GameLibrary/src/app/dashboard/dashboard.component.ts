import { Component, OnInit } from '@angular/core';
import { Game, GameService } from '../shared';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public games: Game[] = [];
  public selectedGame: Game = null;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => this.games = games);
  }

  public selectGame(game: Game) {
    this.selectedGame = game;
  };
}

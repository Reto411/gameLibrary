import { Component, OnInit } from '@angular/core';
import { Game } from '../game/game.model';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().then(games => this.games = games);
  }

  /*dashboardImageForGame(): Image {
    return 
  }*/
}

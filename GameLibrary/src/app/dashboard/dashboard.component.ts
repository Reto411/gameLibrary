import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/models/game.model';
import { GameService } from '../shared/services/game.service';

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
}

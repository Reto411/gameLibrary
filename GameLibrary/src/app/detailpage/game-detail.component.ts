import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/models/game.model';
import { GameService } from '../shared/services/game.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class DetailComponent implements OnInit {
  games: Game[] = [];
  private gameId:number;
  public game: Game = null;

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.gameId = +params['id']; // (+) converts string 'id' to a number
    });

    this.gameService.getGames().subscribe(
        data => {
            this.game = data.find(r => r.id == this.gameId);
        },
        err => console.error(err)
        );
  }
}

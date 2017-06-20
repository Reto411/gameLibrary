import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../shared/models/game.model';
import { GameService } from '../shared/services/game.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class DetailComponent implements OnInit {
  public games: Game[] = [];
  public currentPicturePosition = 0;

  @Input()
  public game: Game = null;

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public changePicture(direction: string) {
    if (direction === 'left') {
      if (this.currentPicturePosition !== 0) {
        this.currentPicturePosition--;
      } else {
        this.currentPicturePosition = (this.game.media.length - 1);
      }
    } else if (direction === 'right') {
      if ((this.currentPicturePosition + 1) !== this.game.media.length) {
        this.currentPicturePosition++;
      } else {
        this.currentPicturePosition = 0;
      }
    }
  }
}

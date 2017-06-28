import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Game, GameService } from '../shared';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {

  public games: Game[] = [];
  public currentPicturePosition = 0;

  @Input()
  public game: Game = null;

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  /**
   *Only gets triggered when there are changes at the input values.
   *Resets the Position of the media array whenever a new game is selected.
   * @param {SimpleChanges} changes
   * @memberof DetailComponent
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['game'] != null) {
      this.resetPosition();
    }
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

  public resetPosition() {
    this.currentPicturePosition = 0;
  }
}

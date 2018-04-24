import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() gameProceed = new EventEmitter<{last_number: number}>();
  game_count: number[];
  last_number: number;
  count_interval: any;
  counting: boolean;

  constructor() { }

  ngOnInit() { }

  startGame() {
    if (this.game_count  === undefined || this.game_count.length === 0 ) {
      this.game_count = [1];
      this.counting = true;
    }
    this.count_interval = setInterval(() => {
      this.last_number = this.game_count[this.game_count.length - 1];
      this.game_count.push(this.last_number + 1);
      this.gameProceed.emit({ last_number: this.last_number + 1 });
      this.counting = true;
    }, 1000);
  }

  quitGame() {
    clearInterval(this.count_interval);
    this.counting = false;
  }

}

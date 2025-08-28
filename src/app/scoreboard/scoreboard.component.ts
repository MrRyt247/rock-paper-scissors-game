import { Component, inject } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-scoreboard',
  imports: [],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css',
})
export class ScoreboardComponent {
  scoreService = inject(ScoreService);
}

import { Component } from '@angular/core';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './rules/rules.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

@Component({
  selector: 'app-root',
  imports: [GameComponent, RulesComponent, ScoreboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}

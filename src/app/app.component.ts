import { Component } from '@angular/core';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './rules/rules.component';

@Component({
  selector: 'app-root',
  imports: [GameComponent, RulesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rock-paper-scissors-game';
}

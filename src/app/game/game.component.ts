import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  result: string | null = null;
  choices: { name: string; image: string }[] = [
    { name: 'rock', image: './assets/icon-rock.svg' },
    { name: 'paper', image: '/assets/icon-paper.svg' },
    { name: 'scissors', image: '/assets/icon-scissors.svg' },
  ];

  scoreService = inject(ScoreService);

  human = new Player();
  computer = new Player();

  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  determineWinner(player: string, computer: string): string {
    if (player === computer) return 'Draw';
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
    ) {
      this.scoreService.incrementScore();
      return 'You Win';
    } else {
      return 'You Lose';
    }
  }

  play(index: number) {
    this.human.play = index;
    this.human.hasPlayed = true;
    const humanChoice = this.choices[index].name;

    const computerIdx = this.getRandomNumber(this.choices.length);
    this.computer.play = computerIdx;
    setTimeout(() => {
      this.computer.hasPlayed = true;
    }, 1000); // delay for dramatic effect
    const computerChioce = this.choices[computerIdx].name;

    setTimeout(() => {
      this.result = this.determineWinner(humanChoice, computerChioce);
    }, 2000); // delay for dramatic effect
  }

  reset() {
    this.human.reset();
    this.computer.reset();
    this.result = null;
  }
}

class Player {
  hasPlayed: boolean = false; // check if played
  #choiceIdx: number = 0; // for index of selection

  set play(i: number) {
    // fancy name for setChoiceIdx
    this.#choiceIdx = i;
  }

  get getIndex(): number {
    return this.#choiceIdx;
  }

  reset() {
    this.#choiceIdx = 0;
    this.hasPlayed = false;
  }
}

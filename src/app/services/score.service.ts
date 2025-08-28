import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  private scoreSignal = signal<number>(0);
  readonly score = this.scoreSignal.asReadonly();

  constructor() {
    this.loadScore();
  }

  private loadScore(): void {
    try {
      const savedScore = localStorage.getItem('gameScore');
      if (savedScore) this.scoreSignal.set(parseInt(savedScore, 10));
    } catch (err) {
      console.error('Error loading score from localStorage:', err);
      this.scoreSignal.set(0);
    }
  }

  private saveScore(score: number): void {
    try {
      localStorage.setItem('gameScore', score.toString());
    } catch (err) {
      console.error('Error saving to localStorage:', err);
    }
  }

  incrementScore(): void {
    const newScore = this.scoreSignal() + 1;
    this.scoreSignal.set(newScore);
    this.saveScore(newScore);
  }

  resetScore(): void {
    this.scoreSignal.set(0);
    this.saveScore(0);
  }
}

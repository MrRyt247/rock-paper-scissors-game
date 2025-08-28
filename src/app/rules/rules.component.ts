import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  imports: [CommonModule],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {
  isOpen: boolean = false;
  isVisible: boolean = false;

  toggle() {
    if (!this.isOpen) {
      
      this.isVisible = true;
      // Small delay to ensure DOM is updated before triggering transition
      setTimeout(() => {
        this.isOpen = true;
      }, 10);
    } else {

      this.isOpen = false;
      setTimeout(() => {
        this.isVisible = false;
      }, 300); // Match with CSS transition duration
    }
  }

  closeModal() {
    this.toggle();
  }

  onModalClick(event: Event) {
    event.stopPropagation();
  }

  onBackdropClick() {
    this.closeModal();
  }
}

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
      // Opening modal
      this.isVisible = true;
      // Small delay to ensure DOM is updated before triggering transition
      setTimeout(() => {
        this.isOpen = true;
      }, 10);
    } else {
      // Closing modal
      this.isOpen = false;
      // Wait for transition to complete before hiding from DOM
      setTimeout(() => {
        this.isVisible = false;
      }, 300); // Match this with your CSS transition duration
    }
  }

  closeModal() {
    this.toggle();
  }

  // Prevent modal from closing when clicking inside the modal content
  onModalClick(event: Event) {
    event.stopPropagation();
  }

  // Close modal when clicking on backdrop
  onBackdropClick() {
    this.closeModal();
  }
}
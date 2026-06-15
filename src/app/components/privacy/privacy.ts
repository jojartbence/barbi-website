import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {
  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();

  handleBackgroundClick(event: Event) {
    if ((event.target as HTMLElement).classList.contains('privacy-overlay')) {
      this.closed.emit();
    }
  }
}

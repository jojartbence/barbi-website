import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-service-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-cards.html',
  styleUrl: './service-cards.scss',
  animations: [
    trigger('detail', [
      state('hidden', style({ height: '0', opacity: 0, margin: '0' })),
      state('visible', style({ height: '*', opacity: 1 })),
      transition('hidden <=> visible', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class ServiceCards {
  isCareerCoachingOpen = false;
  isLeadCoachingOpen = false;
  isJobApplyCoachingOpen = false;

  toggleCareerCoaching(): void {
    this.isCareerCoachingOpen = !this.isCareerCoachingOpen;
    if (this.isCareerCoachingOpen) {
      this.isLeadCoachingOpen = false;
      this.isJobApplyCoachingOpen = false;
    }
  }

  toggleLeadCoaching(): void {
    this.isLeadCoachingOpen = !this.isLeadCoachingOpen;
    if (this.isLeadCoachingOpen) {
      this.isCareerCoachingOpen = false;
      this.isJobApplyCoachingOpen = false;
    }
  }

  toggleJobApplyCoaching(): void {
    this.isJobApplyCoachingOpen = !this.isJobApplyCoachingOpen;
    if (this.isJobApplyCoachingOpen) {
      this.isCareerCoachingOpen = false;
      this.isLeadCoachingOpen = false;
    }
  }
}

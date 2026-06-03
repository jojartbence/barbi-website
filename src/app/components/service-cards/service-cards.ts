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
      this.scrollToSection('career-coaching-details');
    }
  }

  toggleLeadCoaching(): void {
    this.isLeadCoachingOpen = !this.isLeadCoachingOpen;
    if (this.isLeadCoachingOpen) {
      this.isCareerCoachingOpen = false;
      this.isJobApplyCoachingOpen = false;
      this.scrollToSection('lead-coaching-details');
    }
  }

  toggleJobApplyCoaching(): void {
    this.isJobApplyCoachingOpen = !this.isJobApplyCoachingOpen;
    if (this.isJobApplyCoachingOpen) {
      this.isCareerCoachingOpen = false;
      this.isLeadCoachingOpen = false;
      this.scrollToSection('job-apply-coaching-details');
    }
  }

  private scrollToSection(sectionId: string): void {
    if (typeof window === 'undefined') {
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const header = document.querySelector('header');
        const headerHeight = header?.getBoundingClientRect().height || 80;
        const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
      }
    }, 400);
  }
}

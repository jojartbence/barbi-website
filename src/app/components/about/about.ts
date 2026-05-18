import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollAnimationDirective, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [
    trigger('detail', [
      state('hidden', style({ height: '0', opacity: 0, margin: '0' })),
      state('visible', style({ height: '*', opacity: 1 })),
      transition('hidden <=> visible', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class About {
  isDetailOpen = false;

  toggleDetail() {
    this.isDetailOpen = !this.isDetailOpen;
  }
}

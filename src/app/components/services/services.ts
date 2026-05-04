import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

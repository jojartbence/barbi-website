import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-services',
  imports: [ScrollAnimationDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {}

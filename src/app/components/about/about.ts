import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-about',
  imports: [ScrollAnimationDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}

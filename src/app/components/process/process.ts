import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {}

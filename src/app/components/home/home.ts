import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

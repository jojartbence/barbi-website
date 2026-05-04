import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  imports: [ScrollAnimationDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}

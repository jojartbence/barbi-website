import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostBinding,
  OnInit,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit {
  private el = inject(ElementRef);
  private cdr = inject(ChangeDetectorRef);

  @HostBinding('class.fade-in-section') fadeIn = true;
  @HostBinding('class.is-visible') isVisible = false;

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
        this.cdr.markForCheck();
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }
}

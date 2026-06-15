import { ChangeDetectorRef, Component, EventEmitter, inject, NgZone, Output } from '@angular/core';
import { config } from '../../../config';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  @Output() privacyClick = new EventEmitter<void>();

  successPopupVisible = false;
  errorMessage = '';
  config = config;

  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  async submitForm(event: Event) {
    event.preventDefault();
    console.log('Submit attempt - successPopupVisible before:', this.successPopupVisible);
    this.zone.run(() => {
      this.errorMessage = '';
      this.successPopupVisible = false;
    });

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.set('access_key', this.config.web3forms.accessKey);
    formData.set('subject', 'Új üzenet a Barbi Coaching weboldalról');
    formData.set('redirect', '');
    formData.set('botcheck', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log('Response received:', response.ok, result);

      this.zone.run(() => {
        if (response.ok && result.success) {
          console.log('Setting successPopupVisible to true');
          this.successPopupVisible = true;
          this.cdr.detectChanges();
          form.reset();
        } else {
          console.log('Setting error message:', result.message);
          this.errorMessage = result.message || 'Hiba történt a küldés közben. Próbáld újra.';
          this.cdr.detectChanges();
        }
      });
    } catch (error) {
      console.error('Web3Forms submit error', error);
      this.zone.run(() => {
        this.errorMessage =
          'Nem sikerült elküldeni az üzenetet. Ellenőrizd az internetkapcsolatot.';
        this.cdr.detectChanges();
      });
    }
  }

  closePopup() {
    this.successPopupVisible = false;
  }

  openPrivacy(event: Event) {
    event.preventDefault();
    this.privacyClick.emit();
  }
}

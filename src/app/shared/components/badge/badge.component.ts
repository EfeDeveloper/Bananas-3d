import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
})
export class BadgeComponent {
  @Input() label: string = 'Badge';
  @Input() customClass: string =
    'bg-purple-100 text-purple-700 hover:bg-purple-100';

  labelSig = signal(this.label);
  class = signal(this.customClass);

  classes = computed(
    () => `${this.class()}} text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl`
  );
}

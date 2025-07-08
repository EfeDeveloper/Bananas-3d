import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
})
export class BadgeComponent {
  @Input() label: string = 'Badge';
  @Input() customClass: string =
    'bg-amber-100 text-amber-800 hover:bg-amber-100 border border-amber-200';

  labelSig = signal(this.label);

  classes = computed(
    () => `${this.customClass} text-xs font-medium px-2.5 py-1 rounded-xl`
  );
}

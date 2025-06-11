import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeComponent } from '@/shared/components/badge/badge.component';

@Component({
  selector: 'app-hero',
  imports: [FontAwesomeModule, BadgeComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}

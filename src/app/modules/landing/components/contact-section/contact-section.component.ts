import { Contact } from '@/shared/models/contact';
import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact-section',
  imports: [FontAwesomeModule],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  contacts = signal<Contact[]>([
    {
      icon: 'envelope',
      title: 'Email',
      value: 'contact@bananas3d.com',
    },
    {
      icon: 'phone',
      title: 'Teléfono',
      value: '+57 300 2490913',
    },
    {
      icon: 'location-pin',
      title: 'Ubicación',
      value: 'Bogotá, Colombia',
    },
  ]);
}

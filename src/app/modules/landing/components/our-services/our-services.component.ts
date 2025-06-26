import { Component, signal } from '@angular/core';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OurServicesCard } from '@/shared/models/our-services';

@Component({
  selector: 'app-our-services',
  imports: [BadgeComponent, FontAwesomeModule],
  templateUrl: './our-services.component.html',
})
export class OurServicesComponent {
  ourServices = signal<OurServicesCard[]>([
    {
      icon: 'print',
      title: 'Impresión 3D',
      description:
        'Impresión de alta calidad en diversos materiales: PLA, ABS, PETG, TPU y más.',
    },
    {
      icon: 'bolt',
      title: 'Prototipado Rápido',
      description:
        'Convierte tus ideas en prototipos funcionales en tiempo récord.',
    },
    {
      icon: 'toolbox',
      title: 'Diseño Personalizado',
      description:
        'Creamos diseños únicos adaptados a tus necesidades específicas.',
    },
  ]);
}

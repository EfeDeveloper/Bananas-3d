import { Testimonials } from '@/shared/models/textimonials';
import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-testimonials',
  imports: [FontAwesomeModule],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  testimonials = signal<Testimonials[]>([
    {
      name: 'María González',
      role: 'Ingeniera',
      review:
        'Excelente calidad y servicio. Mi prototipo quedó perfecto y la entrega fue muy rápida.',
    },
    {
      name: 'Carlos Ruiz',
      role: 'Diseñador',
      review:
        'Profesionales excepcionales. Convirtieron mi idea en realidad con una precisión increíble.',
    },
    {
      name: 'Ana López',
      role: 'Arquitecta',
      review:
        'Trabajo impecable y atención al detalle. Definitivamente volveré para futuros proyectos.',
    },
  ]);

  // TODO: Transform this into custom pipe
  getInitial(name: string): string {
    return name.charAt(0).toUpperCase();
  }
}

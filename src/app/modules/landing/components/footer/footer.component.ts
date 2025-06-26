import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  year = new Date().getFullYear();

  servicios = [
    'Impresión 3D',
    'Prototipado',
    'Diseño Personalizado',
    'Consultoría',
  ];
  empresa = ['Acerca de', 'Portafolio', 'Blog', 'Contacto'];
  legal = ['Términos de Servicio', 'Política de Privacidad', 'Cookies'];
}

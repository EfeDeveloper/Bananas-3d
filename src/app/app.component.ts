import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeIcons } from './icons.config';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent {
  constructor(library: FaIconLibrary) {
    initializeIcons(library);
  }
}

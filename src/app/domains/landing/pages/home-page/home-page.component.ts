import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}

import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { OurDesignsComponent } from '../../components/ourDesigns/ourDesigns.component';

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent, HeroComponent, OurDesignsComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}

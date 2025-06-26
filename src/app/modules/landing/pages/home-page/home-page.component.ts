import { Component } from '@angular/core';
import { NavbarComponent } from '@/shared/components/navbar/navbar.component';
import { HeroComponent } from '@/modules/landing/components/hero/hero.component';
import { OurDesignsComponent } from '@/modules/landing/components/our-designs/our-designs.component';
import { OurServicesComponent } from '../../components/our-services/our-services.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CtaSectionComponent } from '../../components/ cta-section/ cta-section.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  imports: [
    NavbarComponent,
    HeroComponent,
    OurDesignsComponent,
    OurServicesComponent,
    TestimonialsComponent,
    CtaSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}

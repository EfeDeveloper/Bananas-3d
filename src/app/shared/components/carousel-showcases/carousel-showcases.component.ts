import { CarouselContent } from '@/shared/models/carousels';
import { CurrencyPipe } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeComponent } from '@/shared/components/badge/badge.component';
import { AssetNotFoundComponent } from '../asset-not-found/asset-not-found.component';

@Component({
  selector: 'app-carousel-showcases',
  imports: [
    FontAwesomeModule,
    BadgeComponent,
    CurrencyPipe,
    AssetNotFoundComponent,
  ],
  templateUrl: './carousel-showcases.component.html',
})
export class CarouselShowcasesComponent {
  @Input() items = signal<CarouselContent[]>([]);

  currentSlide = signal<number>(0);

  nextSlide() {
    const itemsArray = this.items();
    if (itemsArray.length > 0) {
      this.currentSlide.set((this.currentSlide() + 1) % itemsArray.length);
    }
  }

  prevSlide() {
    const itemsArray = this.items();
    if (itemsArray.length > 0) {
      this.currentSlide.set(
        (this.currentSlide() - 1 + itemsArray.length) % itemsArray.length
      );
    }
  }

  itemSelected = computed(() => {
    const array = this.items();
    return array.length ? array[this.currentSlide()] : null;
  });
}

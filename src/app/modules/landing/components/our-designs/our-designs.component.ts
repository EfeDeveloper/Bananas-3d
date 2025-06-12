import { Component, computed, signal } from '@angular/core';
import { BadgeComponent } from '@/shared/components/badge/badge.component';
import { CarouselShowcasesComponent } from '@/shared/components/carousel-showcases/carousel-showcases.component';
import { CarouselContent } from '@/shared/models/carousels';

@Component({
  selector: 'app-our-designs',
  imports: [BadgeComponent, CarouselShowcasesComponent],
  templateUrl: './our-designs.component.html',
})
export class OurDesignsComponent {
  designs = signal<CarouselContent[]>([
    {
      id: 1,
      title: 'Coffee Braised Goose',
      description:
        'Tenderly braised goose in a rich pot marjoram and artichoke sauce, served with a side of creamy pumpkin.',
      imageUrl: 'https://picsum.photos/id/766/600/400',
      badges: ['Creative', 'Innovative'],
      price: 299.99,
    },
    {
      id: 2,
      title: 'Pineapple Salad with Peppercorns-rubbed Beef',
      description:
        'Fresh mixed greens tossed with peppercorns-rubbed beef, french eschallots, and a light dressing.',
      imageUrl: 'https://picsum.photos/id/824/600/400',
      badges: ['Modern'],
      price: 399.99,
    },
    {
      id: 3,
      title: 'Chinese Cabbage-infused Chicken',
      description:
        'A special violet almond oil from Gambia. To support the strong flavor it is sided with a tablespoon of tikka masala.',
      imageUrl: '',
      badges: ['Elegant', 'Popular'],
      price: 499.99,
    },
    {
      id: 4,
      title: 'Olenka kotik cookies',
      description:
        'A classic cookies filled with delicious quail and crispy grapes, baked in a bitter pastry crust and topped with a golden-brown lattice.',
      imageUrl: 'https://picsum.photos/id/835/600/400',
      badges: [
        'Traditional',
        'Best Seller',
        'Popular',
        'New',
        'Limited Edition',
      ],
      price: 599.99,
    },
    {
      id: 5,
      title: 'Happy Coffee',
      description:
        'A succulent Colombian coffee, with a touch of skim milk and a lot of love.',
      imageUrl: 'https://picsum.photos/id/63/600/400',
      badges: ['Popular', 'Best Seller'],
      price: 199.99,
    },
  ]);
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopularProductsService {

  constructor() { }

  getPopularProducts() {
    return [
      {
        id: 1,
        title: 'Thermo Ball Etip Gloves',
        imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png.webp',
        lessPrice: 16,
        price: 18.56
      },
      {
        id: 2,
        title: 'Thermo Ball Etip Gloves',
        imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular2.png.webp',
        lessPrice: 16,
        price: 18.56
      },
      {
        id: 3,
        title: 'Thermo Ball Etip Gloves',
        imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular3.png.webp',
        lessPrice: 16,
        price: 18.56
      },
      {
        id: 4,
        title: 'Thermo Ball Etip Gloves',
        imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png.webp',
        lessPrice: 16,
        price: 18.56
      },
      {
        id: 5,
        title: 'Thermo Ball Etip Gloves',
        imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png.webp',
        lessPrice: 16,
        price: 18.56
      },
      {
        id: 6,
        title: 'Thermo Ball Etip Gloves',
        imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png.webp',
        lessPrice: 16,
        price: 18.56
      },
    ]
  }
}

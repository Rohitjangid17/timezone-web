import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      {
        id: 1,
        title: 'Thermo Ball Etip Gloves',
        imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png.webp',
        lessPrice: 12.3,
        price: 15
      },
      {
        id: 2,
        title: 'Thermo Ball Etip Gloves',
        imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png.webp',
        lessPrice: 10,
        price: 11.3
      },
      {
        id: 3,
        title: 'Thermo Ball Etip Gloves',
        imageUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png.webp',
        lessPrice: 16,
        price: 18.56
      },
    ]
  }

}

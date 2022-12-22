import { Products } from './../home/products';
import { Component, OnInit } from '@angular/core';
import { PopularProductsService } from './../home/popular-products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  newPopularData: Products[] = []

  constructor(private popularProductsService: PopularProductsService) { }

  ngOnInit(): void {
    this.newPopularData = this.popularProductsService.getPopularProducts();
  }
}

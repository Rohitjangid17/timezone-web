import { ProductsService } from './products.service';
import { PopularProductsService } from './popular-products.service';
import { Products } from './products';
import { PopularProducts } from './popular-products';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Products[] = [];
  popularProducts: PopularProducts[] = [];

  constructor(private productsService: ProductsService, private popularProductsService: PopularProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();

    this.popularProducts = this.popularProductsService.getPopularProducts()
  }

}

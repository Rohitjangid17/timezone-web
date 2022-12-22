import { ProductDetailsComponent } from './latest/product-details/product-details.component';
import { ProductListComponent } from './latest/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { LatestComponent } from './latest/latest.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-details', component: ProductDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

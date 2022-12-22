import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LatestComponent } from './latest/latest.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { PaymentSystemComponent } from './payment-system/payment-system.component';
import { GoogleMapComponent } from './contact/google-map/google-map.component';
import { ProductListComponent } from './latest/product-list/product-list.component';
import { VideoComponent } from './video/video/video.component';
import { ProductDetailsComponent } from './latest/product-details/product-details.component';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    AboutComponent,
    BlogComponent,
    PagesComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    LatestComponent,
    HomeBannerComponent,
    PaymentSystemComponent,
    GoogleMapComponent,
    ProductListComponent,
    VideoComponent,
    ProductDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    GoogleMapsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    GoogleMapComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

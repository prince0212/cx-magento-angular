import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductListPageComponent } from './catalog/product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './catalog/product-detail-page/product-detail-page.component';
import { AdditionalInformationComponent } from './catalog/additional-information/additional-information.component';
import { ProductDescriptionComponent } from './catalog/product-description/product-description.component';
import { ProductReviewComponent } from './catalog/product-review/product-review.component';
import { BannerComponent } from './home/banner/banner.component';
import { LoginComponent } from './customer/account/login/login.component';
import { SignupComponent } from './customer/account/signup/signup.component';

const appRoutes: Routes = [
  { path : '', component:HomeComponent },
  { path : 'plp', component:ProductListPageComponent },
  { path : 'plp/:id', component:ProductListPageComponent },
  { path : 'product/:sku', component:ProductDetailPageComponent },
  { path : 'login', component:LoginComponent },
  { path : 'signup', component:SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavMenuComponent,
    ProductListPageComponent,
    ProductDetailPageComponent,
    LoginComponent,
    SignupComponent,
    AdditionalInformationComponent,
    ProductDescriptionComponent,
    ProductReviewComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

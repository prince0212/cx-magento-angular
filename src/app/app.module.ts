import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './services/service.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductListPageComponent } from './catalog/product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './catalog/product-detail-page/product-detail-page.component';

const appRoutes: Routes = [
  { path : '', component:HomeComponent },
  { path : 'plp', component:ProductListPageComponent },
  { path : 'plp/:id', component:ProductListPageComponent },
  { path : 'product/:sku', component:ProductDetailPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavMenuComponent,
    ProductListPageComponent,
    ProductDetailPageComponent
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

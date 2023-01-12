import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';
import { Product } from '../product';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})

export class ProductListPageComponent implements OnInit {

  productList:any;

  public products: Product[];
  
  constructor(
    private catalog:CatalogService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.getList();
  }

  ngOnInit(): void {
  }
  
  getList() {
    return this.catalog.getProductList().subscribe(response => {
      this.productList = response['items'];
      var products = <Product[]> response['items'];

      // Find the product image
      products.forEach((product: any) => {
        product.custom_attributes.forEach((attr: any) => {
          if (attr.attribute_code === 'small_image') {
            product.imgSrc = env.MEDIA_DIR + attr.value;
          }
        });
      });
      // end

    });
  }

  openPdp(sku) {
    console.log('SKU',sku);
    this.router.navigate(['product', sku]);
  }

}

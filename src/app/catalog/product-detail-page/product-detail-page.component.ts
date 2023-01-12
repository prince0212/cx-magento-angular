import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';
import { Product } from '../product';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})

export class ProductDetailPageComponent implements OnInit {
  title = '';
  product: any;
  productData: Product;
  productSku: string;
  mediaGallery: any;
  imagePath: [];

  constructor(
    private catalog:CatalogService,
    private route:ActivatedRoute 
  ) {
    this.getProductBySku();
  }

  ngOnInit() {}

  getProductBySku() {
    this.productSku = this.route.snapshot.params['sku'];
    return this.catalog.getProduct(this.productSku).subscribe((response) => {
      this.product = response;
      var productData = <Product> response;
      //this.title = this.product.name;
      productData['media_gallery_entries'].forEach((attr: any) => {
          if (attr.position === 1) {
            productData.imgSrc = env.MEDIA_DIR + attr.file;
          }
        });
    });
    
  }
}

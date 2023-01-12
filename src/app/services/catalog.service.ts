import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, from } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { environment as env} from 'src/environments/environment';
import { Product } from '../catalog/product';

  const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  baseUrl = env.BASE_URL;
  restEndPoint = env.REST_END_POINT;
  mediaDir = env.MEDIA_DIR;
  
  constructor(
    private http: HttpClient
  ) { }

  //searchKey = "searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=20&searchCriteria[pageSize]=10&searchCriteria[currentPage]=1";
  searchKey = "searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=3&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&fields=items[id,sku,name,url,price,custom_attributes]";

  getProductList() {
    return this.http.get(this.restEndPoint+'products?'+this.searchKey);
  }

  getProduct(sku:string) {
    return this.http.get(this.restEndPoint+'products/'+sku);
  }

}

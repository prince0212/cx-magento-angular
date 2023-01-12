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
export class CategoriesService {

  baseUrl = env.BASE_URL;
  restEndPoint = env.REST_END_POINT;
  mediaDir = env.MEDIA_DIR;
  
  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    return this.http.get(this.restEndPoint+'categories');
  }
}

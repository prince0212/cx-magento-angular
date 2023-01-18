import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, from } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { environment as env} from 'src/environments/environment';

  const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" , "Access-Control-Allow-Origin": "*" }),
  };

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  restUrl = env.REST_END_POINT;
  
  constructor(
    private http: HttpClient
  ) { } 
 
  signUpApi(data) {
    return this.http.post<any>(this.restUrl+'customers',data);
  }
}

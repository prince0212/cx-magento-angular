import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { environment as env} from 'src/environments/environment';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupUrl = env.BASE_URL;

  public signupForm !: FormGroup;
  constructor(private formbuilder : FormBuilder, private http : HttpClient , private router: Router, private signup : SignupService) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      fullname : [''],
      email:[''],
      password:['']
    })
  }

  restUrl = env.CUSTOMER_SIGNUP;
  signUp()
  {
    const data = {
      '"customer"': {
          '"email"': this.signupForm.value.email,
          '"firstname"': this.signupForm.value.fullname,
          '"lastname"': this.signupForm.value.fullname
      },
      '"password"': this.signupForm.value.password
  };
       console.log('JSON.stringify(data)');
        console.log(JSON.stringify(data));
        const options = {headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"}};
 this.http.post<any>(this.restUrl,JSON.stringify(data),options)
    .subscribe(response=>{
      console.log(response);
      this.router.navigate(['login']);
    });
    
  }

}

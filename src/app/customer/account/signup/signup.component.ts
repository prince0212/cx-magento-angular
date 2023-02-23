import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { environment as env} from 'src/environments/environment';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(
    private formbuilder : FormBuilder, 
    private http : HttpClient , 
    private router: Router, 
    private customer : CustomerService,
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      fullname : [''],
      email:[''],
      password:['']
    });
  }

  signUp() {
    const data = {
      '"customer"': {
          '"email"': this.signupForm.value.email,
          '"firstname"': this.signupForm.value.fullname,
          '"lastname"': this.signupForm.value.fullname
      },
      '"password"': this.signupForm.value.password
    };

    return this.customer.signUp(data).subscribe((response) => {
      console.log(response);
    })
  
  }
}

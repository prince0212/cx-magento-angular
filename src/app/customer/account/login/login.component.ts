import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder} from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;

  constructor(
    private formbuilder : FormBuilder,
    private customer : CustomerService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:[''],
      password:['']
    });
  }

  auth() {
    const data = {
      '"username"': this.loginForm.value.email,
      '"password"': this.loginForm.value.password
    };

    return this.customer.login(data).subscribe((response) => {
      console.log(response);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IFooter } from './footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footer$: Observable<any> = new Observable();

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { environment as env } from 'src/environments/environment';
import { CategoriesService } from '../services/categories.service';
import { Category } from './category'; 

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @Input() menu: any;
  @Input() menuOpen: boolean;
  @Output() menuStatus: EventEmitter<any> = new EventEmitter<any>();

  public navCategories: any;
  public categoryList: Category[];

  constructor(
    private categories: CategoriesService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.getCategoryList();
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuStatus.emit(!this.menuOpen);
  }

  getCategoryList() {
    return this.categories.getCategories().subscribe(navCategories => {
      this.navCategories = navCategories['children_data'];
      this.categoryList = <Category[]>navCategories['childen_data'];
      // categoryList.forEach((category: any)=> {
      //   if (category.parent_id = 2) {
          
      //   }
      // }) 
    })
  }
}

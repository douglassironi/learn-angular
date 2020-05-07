import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  private searchField:String;
  products = [];
  apiUrlService = "/salon/v1/product/";
  constructor(private route: ActivatedRoute,private apiService: ApiService) { }
  ngOnInit() {
  }

  searchFieldEnter(search:String){
    this.searchField = search;
    this.apiService.get(this.apiUrlService).subscribe((data: any[])=> {
      console.log(data);
      this.products = data.filter(value => value.descricao.toUpperCase().includes(this.searchField.toUpperCase()));

    });
  }

}

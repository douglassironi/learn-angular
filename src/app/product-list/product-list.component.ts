import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import {ActivatedRoute} from "@angular/router";
import {StoredDataService} from "../stored-data.service";
import {stringify} from "querystring";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {Text} from "@angular/compiler";
import {SearchProductComponent} from "../search-product/search-product.component";
import {MatDialog} from "@angular/material/dialog";
import {ProductCartComponent} from "../product-cart/product-cart.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  @Input()  products: [];

  constructor( public dialog: MatDialog) { }

  openDialog(product): void {
    const dialogRef = this.dialog.open(ProductCartComponent, {
      width: '400px',
      height:'800px',
      data: {product}
    });
  }
}

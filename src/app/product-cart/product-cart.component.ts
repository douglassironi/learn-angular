import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StoredDataService} from "../stored-data.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface productData {
  codigo: bigint;
  descricao: string;
  valorVenda: DoubleRange;
  quantidade: BigInteger;
}


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  private produtosStorage: String[] = [];
  productForm = new FormGroup({
    codigo:       new FormControl(''),
    descricao:    new FormControl(''),
    valorVenda:   new FormControl(''),
    quantidade:   new FormControl(''),
  });
  constructor(public dialogRef: MatDialogRef<ProductCartComponent>,
              @Inject(MAT_DIALOG_DATA) public data: productData,private storeProduct: StoredDataService) { }
  onSubmit(){
    this.produtosStorage.push(this.productForm.value);
    localStorage.setItem("products",JSON.stringify(this.produtosStorage))
  }
  ngOnInit() {
    this.productForm.patchValue(this.data.product);
  }
}

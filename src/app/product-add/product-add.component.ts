import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../models/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter()
  product: {name: string, price: number} = {
    name: "",
    price: 0
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.product);
    this.onAdd.emit(this.product)
  }
}

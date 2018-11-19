import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from "../../models";

@Component({
  selector: 'at-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  @Input() height: string = '300px';
  @Input() width: string = '200px';
  @Input() margin: string = '10px';
  @Input() showAvailableColors: boolean = true;
  @Input() nameStyle: any = {};
  @Input() priceStyle: any = {};
  @Input() arrowSize: string = '20px';

  productStyle = {
    'min-width': this.width,
    'max-width': this.width,
    'margin': this.margin,
    'float': 'left'
  };

  constructor() { }

  ngOnInit() {
  }
}

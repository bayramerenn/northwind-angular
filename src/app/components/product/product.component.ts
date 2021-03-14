import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any = [
    {productId :1,productName:'Bardak',categoryId:1,unitPrice:5},
    {productId :2,productName:'Kalem',categoryId:1,unitPrice:5},
    {productId :3,productName:'Masa',categoryId:1,unitPrice:5},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';



@Component({
  selector: 'dash-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products= [];
  constructor(private productService:ProductService) {
   
   }

  ngOnInit() {

    this.productService.getProducts().map(product=>{
     return JSON.stringify(product);
    }).subscribe(product=>{
     this.products = JSON.parse(product);
    })
  }

}

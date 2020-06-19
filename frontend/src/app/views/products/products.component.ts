import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[]

  displayedColumns = ['id','name','price','qte','actions']
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.read().subscribe(products =>{
      this.products = products
    })
  }

  productUpdate():void{
    
  }

}

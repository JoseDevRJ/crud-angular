import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  
  product: Product

  constructor(private router:Router,
    private route:ActivatedRoute,
    private service: ProductService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(product => {
      this.product = product
    })
  }

  productUpdate():void{
    this.service.delete(this.product).subscribe(()=> {
      this.service.showMessage("Produto excluído")
      this.router.navigate(['products'])
    })
  }
  
  
  cancel():void{
    this.router.navigate(['products'])
  }
}

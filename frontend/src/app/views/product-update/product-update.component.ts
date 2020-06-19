import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product:Product

  constructor(private router:Router,
    private route: ActivatedRoute,
    private service:ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(product =>{
      this.product = product
    })
  }
  productUpdate():void{
    this.service.update(this.product).subscribe(()=> {
      this.router.navigate(['products'])
    })
  }
  

  cancel():void{
    this.router.navigate(['products'])
  }
}

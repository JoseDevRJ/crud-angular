import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
    qte: null
  }
  constructor(private service: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  productCreate():void{
    if(this.product.name !=='' && this.product.price!== null && this.product.qte!==null){
      this.service.create(this.product).subscribe(product => {
        this.product = product
        this.service.showMessage("Produto salvo")
        this.router.navigate(['products'])
      })
    }else{
      this.service.showMessage('Favor preencher todos os campos')
    }
  }
  cancel():void{
    this.router.navigate(['products'])
  }

}

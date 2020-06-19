import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private http:HttpClient,
    private snac: MatSnackBar) { }

  showMessage(msg:string){
    this.snac.open(msg,'',{
      duration:2000,
      horizontalPosition:'right',
      verticalPosition:'top'
    })
  }
  create(product:Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product)
  }
  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id:string):Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product:Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url,product)
  }
  delete(product:Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url)
  }

  

}

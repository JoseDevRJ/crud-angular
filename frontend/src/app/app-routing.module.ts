import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductCreateComponent } from './views/product-create/product-create.component';
import { ProductUpdateComponent } from './views/product-update/product-update.component';
import { ProductDeleteComponent } from './views/product-delete/product-delete.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'create',
    component:ProductCreateComponent
  },
  {
    path:'update/:id',
    component:ProductUpdateComponent
  },
  {
    path:'delete/:id',
    component:ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

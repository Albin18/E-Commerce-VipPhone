import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { Router } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {

  product!: Product[];


  constructor(
    private productService: ProductService,
    private sharingDataService: SharingDataService,
    private router:Router){
    if(this.router.getCurrentNavigation()?.extras.state){
    this.product = this.router.getCurrentNavigation()?.extras.state!['products']
    }
  }
//ULtimos cambios de rutas
  ngOnInit(): void {
      if(!this.product){
this.product = this.productService.findAll();
      }
  }

  onAddCart(product: Product){
  this.sharingDataService.productEventEmitter.emit(product);
  }

}

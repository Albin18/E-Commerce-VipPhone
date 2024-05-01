import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { Router } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  product!: Product[];


  constructor(private sharingDataService: SharingDataService, private router:Router){
    this.product = this.router.getCurrentNavigation()?.extras.state!['products']
  }
  onAddCart(product: Product){
  this.sharingDataService.productEventEmitter.emit(product);
  }

}

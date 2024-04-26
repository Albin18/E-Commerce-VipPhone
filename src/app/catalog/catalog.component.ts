import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { ProductCartComponent } from '../product-cart/product-cart.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  @Input() product: Product[] = [];

}

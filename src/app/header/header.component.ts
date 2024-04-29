import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { ItemCart } from '../models/itemCart';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {



//Product cart save
  @Input() items: ItemCart[] = [];
//price total

@Output() openEventEmitter = new EventEmitter();

openCart(): void {
  this.openEventEmitter.emit();
}

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { ItemCart } from '../models/itemCart';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {

  showCart: boolean = false;
  @Input() items: ItemCart[] = [];
  @Input() total = 0;

  @Output() idProductEventEmitter = new EventEmitter();
  deleteCart(id: string) {
    this.idProductEventEmitter.emit(id);
  }
  @Output() openEventEmitter = new EventEmitter();
  openCart(): void {
    this.openEventEmitter.emit();
 }
}

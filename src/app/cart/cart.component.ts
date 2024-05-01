import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { ItemCart } from '../models/itemCart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CatalogComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnChanges{
  product: Product[] = [];
  @Input() items: ItemCart[] = [];
   total = 0;
  constructor(private service: ProductService) {}

  // el arreglo de objetos donde se almacenara los productos del carrito para la compra

  ngOnChanges(change: SimpleChanges): void {
   let itemChange = change['items'];
   this.calculateTotal();
   this.saveSession();
  }

  @Output() idProductEventEmitter = new EventEmitter();
  deleteCart(id: string) {
    this.idProductEventEmitter.emit(id);
  }

  calculateTotal(): void {
    this.total = this.items.reduce(
      (priceTotal, item) => priceTotal + item.quantity * item.product.price,
      0
    );
  }
  //Convertimos nuestro arreglo items en un string
  saveSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { ItemCart } from '../models/itemCart';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-cart-home',
  standalone: true,
  imports: [CatalogComponent, CartComponent],
  templateUrl: './cart-home.component.html',
  styleUrl: './cart-home.component.css'
})
export class CartHomeComponent implements OnInit {
//Product catalog save
    product: Product[] = [];
//Product cart save
    items: ItemCart[] = [];

    constructor(private service: ProductService) {

    }
    ngOnInit(): void {
        this.product = this.service.findAll();
    }

    onAddCart(product: Product){
      const hasItem = this.items.find(item => {
        return item.product.id === product.id;
      });
      if(hasItem){
        this.items = this.items.map(item => {
          if(item.product.id === product.id)
            return {
              ... item, quantity:item.quantity +1
            }
            else{
              return item;
            }
        })
      } else{
      this.items = [...this.items, {product : {...product}, quantity:1}];
      }
    }
}

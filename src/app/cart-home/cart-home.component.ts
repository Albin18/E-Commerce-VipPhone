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
}

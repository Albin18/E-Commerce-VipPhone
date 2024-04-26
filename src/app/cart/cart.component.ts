import { Component, Input, OnInit } from '@angular/core';
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
export class CartComponent implements OnInit {

  product: Product[] = [];

  constructor(private service: ProductService) {

  }
  ngOnInit(): void {
      this.product = this.service.findAll();

      //PARA OTRA CARPETA DE CART
  }
  // el arreglo de objetos donde se almacenara los productos del carrito para la compra
     @Input() items: ItemCart[] = [];

}

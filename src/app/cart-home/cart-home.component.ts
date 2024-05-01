import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { ItemCart } from '../models/itemCart';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';

@Component({
  selector: 'app-cart-home',
  standalone: true,
  imports: [CatalogComponent, HeaderComponent, RouterOutlet],
  templateUrl: './cart-home.component.html',
  styleUrl: './cart-home.component.css',
})
export class CartHomeComponent implements OnInit {
  //Product catalog save
  product: Product[] = [];
  //Product cart save
  items: ItemCart[] = [];
  //price total
  total: number = 0;


  constructor(private sharingDataService: SharingDataService ,private service: ProductService) {}
  ngOnInit(): void {
    this.product = this.service.findAll();
    /*usamos el operador ( ! ) para determinar que no sea vacio*/
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.calculateTotal();
    this.deleteCart();
    this.onAddCart();

  }

  onAddCart() {
    this.sharingDataService.productEventEmitter.subscribe( product =>{

      const hasItem = this.items.find((item) => {
        return item.product.id === product.id;
      });
      if (hasItem) {
        this.items = this.items.map((item) => {
          if (item.product.id === product.id)
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          else {
            return item;
          }
        });
      } else {
        this.items = [...this.items, { product: { ...product }, quantity: 1 }];
      }
      this.calculateTotal();
      this.saveSession();


    })

  }

  deleteCart(): void {
    this.sharingDataService.idProductEventEmitter.subscribe(id =>{
      this.items = this.items.filter((item) => item.product.id !== id);
      if(this.items.length == 0){
        sessionStorage.removeItem('cart')
        sessionStorage.clear();
      }
      this.calculateTotal();
      this.saveSession();
    })

  }
  //reducir el flujo a un solo valor


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

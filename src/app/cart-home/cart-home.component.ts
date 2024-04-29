import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { ItemCart } from '../models/itemCart';
import { HeaderComponent } from '../header/header.component';
import { CartModalComponent } from '../cart-modal/cart-modal.component';
@Component({
  selector: 'app-cart-home',
  standalone: true,
  imports: [CatalogComponent, HeaderComponent, CartModalComponent],
  templateUrl: './cart-home.component.html',
  styleUrl: './cart-home.component.css'
})
export class CartHomeComponent implements OnInit {
//Product catalog save
    product: Product[] = [];
//Product cart save
    items: ItemCart[] = [];
//price total
    total:number = 0;

    showCart: boolean = false;

    constructor(private service: ProductService) {

    }
    ngOnInit(): void {
        this.product = this.service.findAll();
        /*usamos el operador ( ! ) para determinar que no sea vacio*/
        this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
        this.calculateTotal()
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
      this.calculateTotal();
      this.saveSession();
    }

     deleteCart(id: string): void{
        this.items = this.items.filter(item =>
          item.product.id !== id
        );
        this.calculateTotal();
        this.saveSession();
     }
      //reducir el flujo a un solo valor
     calculateTotal():void{
      this.total = this.items.reduce((priceTotal, item ) =>
        priceTotal + item.quantity * item.product.price, 0);
     }
//Convertimos nuestro arreglo items en un string
     saveSession(): void{
      sessionStorage.setItem('cart', JSON.stringify(this.items))
     }

     openCart(): void {
        this.showCart = !this.showCart;
     }

}

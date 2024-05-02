import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { ItemCart } from '../models/itemCart';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';
import Swal from 'sweetalert2';

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

  constructor(
    private router: Router,
    private sharingDataService: SharingDataService,
    private service: ProductService
  ) {}
  ngOnInit(): void {
    this.product = this.service.findAll();
    /*usamos el operador ( ! ) para determinar que no sea vacio*/
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.calculateTotal();
    this.deleteCart();
    this.onAddCart();
  }

  onAddCart() {
    this.sharingDataService.productEventEmitter.subscribe((product) => {
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
      this.router.navigate(['/cart'], {
        state: { items: this.items, total: this.total },
      });

      Swal.fire({
        title: 'Agregado a tu Carrito',
        text: 'Ya puedes revisar tus productos',
        icon: 'success',
      });
    });
  }

  deleteCart(): void {
    this.sharingDataService.idProductEventEmitter.subscribe((id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.items = this.items.filter((item) => item.product.id !== id);
          if (this.items.length == 0) {
            sessionStorage.removeItem('cart');
            sessionStorage.clear();
          }
          this.calculateTotal();
          this.saveSession();

          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/cart'], {
              state: { items: this.items, total: this.total },
            });
          });
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
        }
      });

    });
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

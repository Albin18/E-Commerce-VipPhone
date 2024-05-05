import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { ItemCart } from '../models/itemCart';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() items: ItemCart[] = [];


  @Input() total: number = 0;

  @Input() products: Product[] = [];
}

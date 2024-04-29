import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartHomeComponent } from './cart-home/cart-home.component';
import { HeaderComponent } from './header/header.component';
import { ItemCart } from './models/itemCart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent, CartHomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items: ItemCart[] = [];
  title = 'ECommerce-VipPhone';


}

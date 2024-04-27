import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartHomeComponent } from './cart-home/cart-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent, CartHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ECommerce-VipPhone';
}

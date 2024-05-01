import { Component, Input} from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { ItemCart } from '../models/itemCart';
import { RouterModule } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {



//Product cart save
  @Input() items: ItemCart[] = [];


  @Input() total: number = 0;

  @Input() products: Product[] = [];


}

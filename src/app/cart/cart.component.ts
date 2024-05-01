import { Component, EventEmitter} from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';
import { ItemCart } from '../models/itemCart';
import { Router } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CatalogComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {

  items: ItemCart[] = [];

   total = 0;

   constructor(private sharingDataService: SharingDataService, private router: Router) {
      this.items = this.router.getCurrentNavigation()?.extras.state!['items'];
      this.total = this.router.getCurrentNavigation()?.extras.state!['total'];
   }

  // el arreglo de objetos donde se almacenara los productos del carrito para la compra

  deleteCart(id: string) {
    this.sharingDataService.idProductEventEmitter.emit(id);
  }


}

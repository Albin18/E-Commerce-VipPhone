import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [

{path: 'cart', component : CartComponent},
{path: 'catalog', component: CatalogComponent}
];

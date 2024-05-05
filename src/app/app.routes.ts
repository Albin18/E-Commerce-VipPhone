import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
//Ruta principal cuando inicia la aplicacion
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'cart', component : CartComponent},
{path: 'catalog', component: CatalogComponent},
{path: 'home', component: HomeComponent }
];

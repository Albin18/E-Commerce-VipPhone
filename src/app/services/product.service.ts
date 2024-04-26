import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { productJSON } from '../data/product.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  findAll(): Product[] {
    return productJSON;
  }
}

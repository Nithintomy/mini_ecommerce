import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private API = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>(this.API);
  }
}

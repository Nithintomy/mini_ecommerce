import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private API = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>(this.API);
  }

  getProduct(slug: string) {
    return this.http.get<any>(`${this.API}/${slug}`);
  }

  createProduct(data: any) {
    return this.http.post(this.API, data);
  }

  getProductById(id: string) { return this.http.get(`${this.API}/id/${id}`); }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  

  constructor(private http: HttpClient) { }
  getcardProduct() {
    return this.http.get("http://localhost:3000/api/trucksy/products");
  }
  
 
}


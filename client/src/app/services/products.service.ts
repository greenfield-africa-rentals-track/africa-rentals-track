import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  addProduct(object:Object){
    return this.http.post("http://localhost:3000/api/trucksy/products",object)
  }
}

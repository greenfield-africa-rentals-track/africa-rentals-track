import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
searchResult:any[]=[]
searchString:string=""
  constructor(private http: HttpClient) { }
  getProduct() {
    return this.http.get("http://localhost:3000/api/trucksy/products");
  }
  obs(): Observable<string>{
    const mystr= of(this.searchString)
    console.log("observable",mystr)
    return mystr
  }

}

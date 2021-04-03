import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  signupUser(user: any)  {
    return this.http.post("http://localhost:3000/api/trucksy/create", user)
  }
}

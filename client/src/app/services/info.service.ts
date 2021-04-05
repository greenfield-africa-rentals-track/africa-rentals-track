import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http:HttpClient) { }
  addinfo(object:Object){
    return this.http.post("http://localhost:3000/rantel",object)
  }

}

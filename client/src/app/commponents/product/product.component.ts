import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import {ProductService} from '../../servises/product.service';
 import { FilterPipe } from '../../pipes/filter.pipe'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  mydata: any=[];
  searchString:string=this.pdService.searchString

  constructor(private router:Router ,public pdService:ProductService) { }
   
  functionON() {
    this.router.navigate(["/info"])
    
  }
  getprod(){
    this.pdService.getProduct().subscribe((data:any)=>{
      this.mydata = data
      this.pdService.searchResult=data
      console.log(data,"pxamachekl")
     
    })
  }

  ngOnInit(): void {
    this.getprod()
    this.pdService.obs().subscribe(data=>{this.searchString=data,console.log("darrrr",data)})
    console.log("result search",this.pdService.searchResult)
  }

}

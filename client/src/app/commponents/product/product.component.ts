import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
 import { FilterPipe } from '../../pipes/filter.pipe'
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  mydata: any=[];
  searchString:string=this.pdService.searchString

  constructor(private router:Router ,public pdService:ProductService) { }
   
  functionON(id:string){
    
    console.log(id)
    this.router.navigate(["/info/"+id])
   
    
  }
  getprod(){
    this.pdService.getProduct().subscribe((data:any)=>{
      this.mydata = data
      this.pdService.searchResult=data
      console.log(data,"pxamachekl")
     
    })
  }
  update(){
    if(localStorage.admin){
      this.router.navigate(['/update'])
    }
    
  }

  ngOnInit(): void {
    this.getprod()
    this.pdService.obs().subscribe(data=>{this.searchString=data,console.log("darrrr",data)})
    console.log("result search",this.pdService.searchResult)
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  mydata: any=[];

  constructor(private router:Router ,private pdService:ProductService) { }
   
  functionON(id:string){
    
    console.log(id)
    this.router.navigate(["/info/"+id])
   
    
  }
  getprod(){
    this.pdService.getProduct().subscribe((data)=>{
      this.mydata = data
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
  }

}

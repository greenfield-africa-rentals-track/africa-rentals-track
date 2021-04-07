import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import {ProductService} from '../../servises/product.service';
import { ProductsService} from '../../services/products.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  deleteProd: any
  mydata: any=[];
  showBin = false;
  constructor(private router:Router ,private pdService:ProductService,private serv:ProductsService) { }
  
  click(id:string){
 this.serv.deleteProduct(id).subscribe((pro)=>{
   this.deleteProd=pro
  })
}
  showbnin(){
    if(localStorage.admin){
      this.showBin = true
    }
  }
  functionON() {
    this.router.navigate(["/info"])
    
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
    this.showbnin()
  }

}

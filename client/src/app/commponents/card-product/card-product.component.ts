import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import {AddToCartService} from '../../servise/add-to-cart.service'
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
 
 dataList:any=[];

  constructor( private router:Router,private cartService:AddToCartService) { }

  
  functionON() {
    this.router.navigate(["/info"])
    
  }
  getcardprod(){
    
    this.cartService.getcardProduct().subscribe((data)=>{
      this.dataList = data
      console.log(data,"hello")
      
     
    })
  }
 
  ngOnInit(): void {
    this.getcardprod()
  }

}

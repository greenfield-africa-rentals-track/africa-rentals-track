import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InfoService} from "../../services/info.service"
import { Router, RouterModule, Routes } from '@angular/router';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  myproducts:any
  products:any
  changeorm:FormGroup
  constructor(private put: FormBuilder,private objectService:InfoService,private getone:ProductService,private router:Router,private route: ActivatedRoute,private pdService:ProductsService) { 
    this.changeorm = this.put.group({
      price: [''],
    })
  }
  updateonee(id:string,price:string){
    console.log(id,'jjjjjj')
    this.pdService.updaeteone(id,this.changeorm.value).subscribe((data)=>{
      this.products=data
      console.log(this.products,'nnnnnnnnnnnnnnnnnnnnnnn')
       })
  }
 
  ngOnInit(): void {
 const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute =(routeParams.get('id'));
    if(productIdFromRoute)
 this.getone.getOneproduct(productIdFromRoute).subscribe((product)=>{
   this.myproducts=product
   console.log(this.myproducts,'my one pro')
 })

}
  

}

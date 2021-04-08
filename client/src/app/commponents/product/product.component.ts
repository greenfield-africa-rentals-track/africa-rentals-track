import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

 import { FilterPipe } from '../../pipes/filter.pipe'

import { ProductsService} from '../../services/products.service'
import {ProductService} from '../../services/product.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  deleteProd: any

  mydata: any=[];

  searchString:string=this.pdService.searchString


  

  showBin = false;
  constructor(private router:Router ,private pdService:ProductService,private serv:ProductsService) { }
  
  click(id:string){
 this.serv.deleteProduct(id).subscribe((pro)=>{
  Swal.fire({
    icon: 'success',
    title: 'Product is deleted successfully',
    showConfirmButton: false,
    timer: 1500
  })
  setTimeout(() =>{this.deleteProd=pro
    window.location.reload()}, 300)
   
  })
}
  showbnin(){
    if(localStorage.admin){
      this.showBin = true
    }
  }

  functionON(id:string){
    this.router.navigate(["/info/"+id])

  }
  getprod(){
    this.pdService.getProduct().subscribe((data:any)=>{
      this.mydata = data


      this.pdService.searchResult=data
      console.log(data,"pxamachekl")

    })
  }
  update(id:string){
    if(localStorage.admin){
      this.router.navigate(['/update/'+id])
    }
    
  }

  ngOnInit(): void {
    this.getprod()

    this.pdService.obs().subscribe(data=>{this.searchString=data,console.log("darrrr",data)})
    console.log("result search",this.pdService.searchResult)

    this.showbnin()

  }

}

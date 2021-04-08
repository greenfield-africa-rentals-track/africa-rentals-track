import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
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
    this.pdService.getProduct().subscribe((data)=>{
      this.mydata = data
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

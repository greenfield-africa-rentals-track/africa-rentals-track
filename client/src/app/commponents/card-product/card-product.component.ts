import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
 
 dataList=[
   {name: 'Scissor Lifts', image:'https://cdn.shopify.com/s/files/1/0085/2593/8767/products/26322_1024x1024@2x.jpg?v=1610605728' },
   {name: 'Boom Lifts', image:'https://www.genielift.com/images/default-source/product-images/telescopic-booms/s-40-s-45/s-45_cutout-1.jpg?sfvrsn=9b29291f_15' },
   {name: 'Warehouse Forklifts', image:'https://miamitoolrental.com/wp-content/uploads/2017/11/8FGU25-700x700.jpg' },
   {name: 'Scissor Lift', image:'https://cdn.shopify.com/s/files/1/0085/2593/8767/products/26322_1024x1024@2x.jpg?v=1610605728' },
   {name: 'Scissor Lifts', image:'https://cdn.shopify.com/s/files/1/0085/2593/8767/products/26322_1024x1024@2x.jpg?v=1610605728' },
   {name: 'Scissor Lifts', image:'https://cdn.shopify.com/s/files/1/0085/2593/8767/products/26322_1024x1024@2x.jpg?v=1610605728' },
   {name: 'Scissor Lifts', image:'https://cdn.shopify.com/s/files/1/0085/2593/8767/products/26322_1024x1024@2x.jpg?v=1610605728' },
   {name: 'Scissor Lifts', image:'https://cdn.shopify.com/s/files/1/0085/2593/8767/products/26322_1024x1024@2x.jpg?v=1610605728' },
 ];
  constructor( private router:Router ) { }
  functionON() {
    this.router.navigate(["/info"])
    
  }
  ngOnInit(): void {
  }

}

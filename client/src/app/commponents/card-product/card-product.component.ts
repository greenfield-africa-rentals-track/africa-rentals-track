import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import {AddToCartService} from '../../services/add-to-cart.service'
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
  {name: 'Telehandler Reach Forklift', image:'https://www.unitedrentals.com/sites/default/files/styles/square_1_1_414x414/public/2020-01/233-1175.jpg' },
  {name: 'Skid Steer Loader', image:'https://www.unitedrentals.com/sites/default/files/styles/square_1_1_414x414/public/2020-01/903-0071.jpg' },
  {name: 'Backhoe Loader', image:'https://www.unitedrentals.com/sites/default/files/styles/square_1_1_414x414/public/category/902/902-1000_0.jpg' },
  {name: 'Portable Air Compressor', image:'https://www.unitedrentals.com/sites/default/files/styles/square_1_1_414x414/public/category/100/100-4396_1.jpg' },
  {name: 'Portable Generator', image:'https://www.unitedrentals.com/sites/default/files/styles/square_1_1_414x414/public/2020-01/240-2981.jpg' },
];

  constructor( private router:Router,private cartService:AddToCartService) { }

  
  functionON() {
    this.router.navigate(["/info"])
    
  }
  // getcardprod(){
    
  //   this.cartService.getcardProduct().subscribe((data)=>{
  //     this.dataList = data
  //     console.log(data,"hello")
      
     
  //   })
  
 
  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router) { }
  options: string[] = ['Apple', 'Orange', 'Banana']
  functionON() {
    this.router.navigate(["/info"])
    
  }
  img: string[]= ['https://www.unitedrentals.com/sites/default/files/styles/square_1_1_414x414/public/category/300/300-0750_0.jpg']

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  options: string[] = ['Apple', 'Orange', 'Banana']
  img: string[]= ['https://www.unitedrentals.com/sites/default/files/styles/square_1_1_414x414/public/category/300/300-0750_0.jpg']

  ngOnInit(): void {
  }

}

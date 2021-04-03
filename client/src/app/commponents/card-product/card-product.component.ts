import { Component, OnInit } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';




@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  height = "number";
  
  constructor() { }

  ngOnInit(): void {
  }

}

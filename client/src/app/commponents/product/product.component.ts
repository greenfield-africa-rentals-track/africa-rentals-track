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
  ngOnInit(): void {
  }

}

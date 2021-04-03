import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  slides = [{'image': 'https://www.constructioncayola.com/e-docs/00/01/46/59/carac_vignette_1.jpg'}, {'image': 'https://www.constructioncayola.com/e-docs/00/01/46/59/carac_vignette_1.jpg'},{'image': 'https://www.constructioncayola.com/e-docs/00/01/46/59/carac_vignette_1.jpg'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}];

  constructor() { }

  ngOnInit(): void {
  }

}

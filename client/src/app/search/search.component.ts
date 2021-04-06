import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {ProductService} from '../servises/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  data: any=[];
  
  constructor(private pdService:ProductService) { }
  getprod(){
    this.pdService.getProduct().subscribe((data)=>{
      this.data = data
      console.log(data,"pxamachekl")
     
    })
  }
  transform(languages: string[]): any[]{     
    if(!this.data) {
        return  [];
    }
    this.data = this.data.toLowerCase();
   return languages.filter(
       x =>x.toLowerCase().includes(this.data)
   )
 }

  ngOnInit(): void {
    this.getprod(),
    this.transform
    
  }

}

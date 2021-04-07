import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InfoService} from "../../services/info.service"
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  products:any
  // heroForm: FormGroup
  constructor(private fb: FormBuilder,private objectService:InfoService,private router:Router,private route: ActivatedRoute,private pdService:ProductService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute =(routeParams.get('id'));
    if(productIdFromRoute)
 this.pdService.getOneproduct(productIdFromRoute).subscribe((product)=>{
   this.products=product
   console.log(this.products,'my one pro')
 })
  }

}

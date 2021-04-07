import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateValidator} from '../shared/date.validator';
import {InfoService} from "../../services/info.service"
import { Router, RouterModule, Routes } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  product:any
  heroForm: FormGroup
  constructor(private fb: FormBuilder,private objectService:InfoService,private router:Router,private route: ActivatedRoute,private pdService:ProductService) { 
    this.heroForm = this.fb.group({
      Startdate: ['', Validators.compose([Validators.required, DateValidator.dateVaidator])],
      Enddate: ['', Validators.compose([Validators.required, DateValidator.dateVaidator])],
      quantity: ['', Validators.compose([Validators.required, DateValidator.dateVaidator])]

    });
  }
  submit() {
      this.objectService
      .addinfo(this.heroForm.value)
      .subscribe(object=>{console.log(object,'newobject')})

    }
  ngOnInit(): void {
     if(localStorage.admin!==undefined){
      this.router.navigate(["profil","info"])
    } else if(localStorage.user===undefined){
     this.router.navigate([""])
      Swal.fire({
        icon: 'error',
        title: 'You need to connect before',
        showConfirmButton: false,
        timer: 3000
        
      })
   
 
    }else if(localStorage.user!==undefined){
      this.router.navigate(["profil","info"])
    }
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute =(routeParams.get('id'));
    if(productIdFromRoute)
 this.pdService.getOneproduct(productIdFromRoute).subscribe((product)=>{
   this.product=product
   console.log(this.product,'my one pro')
 })
  }
  

}

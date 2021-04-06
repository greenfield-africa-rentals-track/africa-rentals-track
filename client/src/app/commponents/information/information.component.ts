import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateValidator} from '../shared/date.validator';
import {InfoService} from "../../services/info.service"
import { Router, RouterModule, Routes } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  //data:any;
  heroForm: FormGroup
  constructor(private fb: FormBuilder,private objectService:InfoService,private router:Router ) { 
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
      window.location.reload()
    }
  ngOnInit(): void {
    if(localStorage.user===undefined){
     this.router.navigate([""])
      Swal.fire({
        icon: 'success',
        title: 'Your account is created successfully',
        showConfirmButton: false,
        timer: 2000
        
      })
 
    }else if(localStorage.user!==undefined){
      this.router.navigate(["profil","info"])
    }
  }
  

}

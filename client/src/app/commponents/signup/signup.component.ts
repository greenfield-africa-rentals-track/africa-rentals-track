import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { FormBuilder, Validators } from "@angular/forms";
import Swal from 'sweetalert2';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  UserForm= this.myform.group({
    firstName:["", Validators.required],
    lastName:["", Validators.required],
    email:["", [Validators.required, Validators.email]],
    password:["", [Validators.required, Validators.minLength(6)]],
    phoneNumber:["", [Validators.required, Validators.minLength(8)]]
  })
  submitted = false;
  constructor( private userService: UsersService, private myform: FormBuilder, private router:Router) { }
  get f() { return this.UserForm.controls; }
  signupUser(){
    this.submitted = true;
    if(this.UserForm.valid){
      this.userService.signupUser(this.UserForm.value).subscribe((data)=>{Swal.fire({
        icon: 'success',
        title: 'Your account is created successfully',
        showConfirmButton: false,
        timer: 2000
      })
      this.redirectsignin()
      })
    }else{
      return;
    }
  }
  redirectsignin(){
    setTimeout(() => {this.router.navigate(["/signin"])}, 2100)
  }
  ngOnInit(): void {
  }
 
}
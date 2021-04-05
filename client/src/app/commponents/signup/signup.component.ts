import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../servises/users.service"
import { FormBuilder, Validators } from "@angular/forms"
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
    phoneNumber:["", [Validators.required, Validators.minLength(8)]],
  })
  submitted = false;
  constructor( private userService: UsersService, private myform: FormBuilder) { }
  get f() { return this.UserForm.controls; }
  signupUser(){
    this.submitted = true;
    if(this.UserForm.valid){
      this.userService.signupUser(this.UserForm.value).subscribe((data)=>{console.log(data, this.UserForm.value);
      })
    }else{
      return;
    }
  }

  ngOnInit(): void {
  }
 
}

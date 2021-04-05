import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../servises/users.service"
import { FormBuilder } from "@angular/forms"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  UserForm= this.myform.group({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phoneNumber:""
  })
  constructor( private userService: UsersService, private myform: FormBuilder) { }
  signupUser(){
    this.userService.signupUser(this.UserForm.value).subscribe((data)=>{console.log(data, this.UserForm.value);
    })
  }

  ngOnInit(): void {
  }
 
}

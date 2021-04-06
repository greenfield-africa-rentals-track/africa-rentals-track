import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { UsersService } from "../../servises/users.service";
import { Router, RouterModule, Routes  } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  userForm= this.myform.group({
    email:["", Validators.required],
    password:["", [Validators.required, Validators.minLength(6)]]
  })
  constructor(private userService: UsersService ,private myform: FormBuilder, private router:Router) { }
  get f() { return this.userForm.controls; }
  signinUser(){ 
    var value = this.userForm.value
    if(value.email !== "admin" && value.password !=="admin"){
      console.log(this.userForm);
      this.userService.signinUser(this.userForm.value).subscribe((data) => {localStorage.setItem('user', Object.values(data)[1])
      this.router.navigate([""])
      })
    }else{
      console.log(this.userForm.value);
      this.userService.signinUser(this.userForm.value).subscribe((data) => {localStorage.setItem('admin', Object.values(data)[1])})
      this.router.navigate(["/admin"]) 
    }
  }
  
  ngOnInit(): void {
  }

}

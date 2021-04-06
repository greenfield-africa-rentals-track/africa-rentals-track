import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { UsersService } from "../../servises/users.service"

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userForm= this.myform.group({
    email:["", Validators.required],
    password:[, [Validators.required, Validators.minLength(6)]]
  })
  constructor(private userService: UsersService ,private myform: FormBuilder) { }
  get f() { return this.userForm.controls; }
  signinUser(){ 
    if(this.userForm.valid){
      console.log(this.userForm);
      this.userService.signinUser(this.userForm.value).subscribe((data) => {console.log(data);
      })
    }
  }
  ngOnInit(): void {
  }

}

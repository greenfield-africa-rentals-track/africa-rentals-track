import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UsersService } from '../../services/users.service'
@Component({
  selector: 'app-usersinfo',
  templateUrl: './usersinfo.component.html',
  styleUrls: ['./usersinfo.component.css']
})
export class UsersinfoComponent implements OnInit {
  users: any=[];
  constructor(private router:Router, private userService: UsersService) { }
  AllUsers(){
    this.userService.getusers().subscribe((data) => {
      this.users = data
      console.log(data,"heyyyyyyy");
    })
  }
  ngOnInit(): void {
    this.AllUsers()
  }

}

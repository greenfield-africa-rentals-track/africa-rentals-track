import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-logoutnavbar',
  templateUrl: './logoutnavbar.component.html',
  styleUrls: ['./logoutnavbar.component.css']
})
export class LogoutnavbarComponent implements OnInit {

  constructor(private router:Router) { }

  goToHome(){
    this.router.navigate([""])
  }
  logout(){
    localStorage.clear();
  }
  ngOnInit(): void {
  }

}

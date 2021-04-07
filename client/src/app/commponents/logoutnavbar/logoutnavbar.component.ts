import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-logoutnavbar',
  templateUrl: './logoutnavbar.component.html',
  styleUrls: ['./logoutnavbar.component.css']
})
export class LogoutnavbarComponent implements OnInit {

  constructor(private router:Router) { }

  goToHomt(){
    this.router.navigate(["/admin"])
    
  }
  
  goToHom(){
    this.router.navigate(["/conect"])
  }
  logout(){
    localStorage.clear();
    this.router.navigate([""])
  }
  rediract(){
    this.router.navigate(["/user"])
  }
  ngOnInit(): void {
  }

}

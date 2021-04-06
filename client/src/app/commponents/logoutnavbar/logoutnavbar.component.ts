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
  update(){
    this.router.navigate(['/update'])
  }
  goToHom(){
    this.router.navigate(["/conect"])
  }
  rediract(){
    this.router.navigate(['/user'])
  }
  ngOnInit(): void {
  }

}

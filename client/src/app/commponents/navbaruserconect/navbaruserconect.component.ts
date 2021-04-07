import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navbaruserconect',
  templateUrl: './navbaruserconect.component.html',
  styleUrls: ['./navbaruserconect.component.css']
})
export class NavbaruserconectComponent implements OnInit {

  constructor(private router:Router) { }
  logout() {
    localStorage.clear()
    this.router.navigate([""])
  }
  profil(){
    if(localStorage.user){
         this.router.navigate(["/profile"])
    }
    }
   
    
  
  ngOnInit(): void {
  }

}

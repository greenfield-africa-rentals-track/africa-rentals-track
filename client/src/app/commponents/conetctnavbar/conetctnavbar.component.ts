import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-conetctnavbar',
  templateUrl: './conetctnavbar.component.html',
  styleUrls: ['./conetctnavbar.component.css']
})
export class ConetctnavbarComponent implements OnInit {

  constructor(private router:Router) { }
  rediractto() {
    this.router.navigate(["/Signup"])
  }
  goToHome(){
    this.router.navigate([""])
  }
  ngOnInit(): void {
  }

}

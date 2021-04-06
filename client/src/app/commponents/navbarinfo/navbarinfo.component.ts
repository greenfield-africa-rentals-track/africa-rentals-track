import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-navbarinfo',
  templateUrl: './navbarinfo.component.html',
  styleUrls: ['./navbarinfo.component.css']
})
export class NavbarinfoComponent implements OnInit {

  constructor(private router:Router) { }
  goToHom(){
    this.router.navigate(["/profil"])
  }
  ngOnInit(): void {
  }

}

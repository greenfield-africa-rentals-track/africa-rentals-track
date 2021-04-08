import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-navbarhomeconect',
  templateUrl: './navbarhomeconect.component.html',
  styleUrls: ['./navbarhomeconect.component.css'],
})
export class NavbarhomeconectComponent implements OnInit {
  constructor(private router: Router) {}
  rediractto() {
    this.router.navigate(['/admin']);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  ngOnInit(): void {}
}

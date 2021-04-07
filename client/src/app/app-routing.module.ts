  
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './commponents/information/information.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './commponents/product/product.component';
import { SignupComponent } from './commponents/signup/signup.component';
import { AdminComponent } from './commponents/admin/admin.component';
import { ConetctnavbarComponent } from './commponents/conectnavbar/conetctnavbar.component';
import { NavbarComponent } from './commponents/navbar/navbar.component';
import { CardProductComponent } from './commponents/card-product/card-product.component';
import {SigninComponent } from './commponents/signin/signin.component'
import { NavbarhomeconectComponent } from './commponents/navbarhomeconect/navbarhomeconect.component';
import { NavbaruserconectComponent } from './commponents/navbaruserconect/navbaruserconect.component';
import { UsersinfoComponent } from './commponents/usersinfo/usersinfo.component';
import { UpdateComponent } from './commponents/update/update.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {path:"profil",component:NavbaruserconectComponent},
  {path:"",component:NavbarComponent},
  {path:"info",component:InformationComponent},
  {path:"admin",component:AdminComponent},
  {path:"Signup",component:SignupComponent},
  {path:"signin",component:SigninComponent},
  {path:"conect",component:NavbarhomeconectComponent},
  {path:"user",component:UsersinfoComponent},
  {path:"update",component:UpdateComponent},
  {path:"profile",component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router:Router){
  }

}

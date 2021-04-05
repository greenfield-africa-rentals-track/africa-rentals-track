  
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './commponents/information/information.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './commponents/product/product.component';
import { SignupComponent } from './commponents/signup/signup.component';
import { AdminComponent } from './commponents/admin/admin.component';
import { ConetctnavbarComponent } from './commponents/conetctnavbar/conetctnavbar.component';
import { NavbarComponent } from './commponents/navbar/navbar.component';
import { CardProductComponent } from './commponents/card-product/card-product.component';


const routes: Routes = [
  {path:"",component:NavbarComponent},
  {path:"info",component:InformationComponent},
  {path:"admin",component:AdminComponent},

  {path:"Signup",component:SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router:Router){
  }

}

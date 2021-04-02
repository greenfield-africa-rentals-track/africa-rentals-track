  
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './commponents/information/information.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './commponents/navbar/navbar.component';
import { ProductComponent } from './commponents/product/product.component';

const routes: Routes = [
  {path:"",component:ProductComponent},
  {path:"info",component:InformationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router:Router){
  }

}

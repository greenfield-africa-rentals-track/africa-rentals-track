import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationComponent } from './commponents/information/information.component';
//dali
import { NavbarComponent } from './commponents/navbar/navbar.component';
import {MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardProductComponent } from './commponents/card-product/card-product.component';
import { ProductComponent } from './commponents/product/product.component'
import { MatCardModule } from "@angular/material/card";
import { MatSliderModule } from '@angular/material/slider';
import {ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './commponents/admin/admin.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const appRoutes: Routes = [
];
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { SignupComponent } from './commponents/signup/signup.component';
import {FormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    NavbarComponent,
    
    CardProductComponent,
    ProductComponent,
    AdminComponent,
    SignupComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    MDBBootstrapModule.forRoot(),
    IvyCarouselModule,
    FormsModule,

    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule {

 }

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateValidator} from '../shared/date.validator';
import {InfoService} from "../../services/info.service"
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  //data:any;
  heroForm: FormGroup
  constructor(private fb: FormBuilder,private objectService:InfoService) { 
    this.heroForm = this.fb.group({
      Startdate: ['', Validators.compose([Validators.required, DateValidator.dateVaidator])],
      Enddate: ['', Validators.compose([Validators.required, DateValidator.dateVaidator])],
      quantity: ['', Validators.compose([Validators.required, DateValidator.dateVaidator])]

    });
  }
  submit() {
    //this.data=this.heroForm.value
   // console.log(this.data,'mydata')
      this.objectService
      .addinfo(this.heroForm.value)
      .subscribe(object=>{console.log(object,'newobject')})
    }
  ngOnInit(): void {
  }
  

}

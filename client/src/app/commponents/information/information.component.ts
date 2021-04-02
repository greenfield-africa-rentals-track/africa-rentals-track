import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateValidator} from '../shared/date.validator';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  heroForm: FormGroup
  constructor(private fb: FormBuilder) { 
    this.heroForm = this.fb.group({
      date: ['', Validators.compose([Validators.required, DateValidator.dateVaidator])]
    });
  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.heroForm.valid);
  }

}

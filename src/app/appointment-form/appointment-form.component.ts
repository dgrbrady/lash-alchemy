import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  products = ['lashes1', 'lashes2', 'lashes3']
  model = {
    time: {hour: 8, minute: 30}
  };
  // model = new Appointment({
  //   client_name: '',
  //   date: '0-0-0',
  //   phone_number: '',
  //   email: '',
  //   product: '',
  //   start_time: '00:00',
  //   end_time: '00:00'
  // });
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }
  get diagnostic() { return JSON.stringify(this.model); }
}

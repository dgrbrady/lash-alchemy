import { Time } from '@angular/common';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Appointment {
  // id: Number;
  clientName: String;
  date: NgbDateStruct;
  phoneNumber: String;
  email: String;
  product: String;
  startTime: Time;
  endTime: Time;

  constructor(response) {
    // this.id = response.id;
    this.clientName = response.client_name;
    this.date = {
      year: Number(response.date.split('-')[0]),
      month: Number(response.date.split('-')[1]),
      day: Number(response.date.split('-')[2]),
    };
    this.phoneNumber = response.phone_number;
    this.email = response.email;
    this.product = response.product;
    this.startTime = {
      hours: Number(response.start_time.split(':')[0]),
      minutes: Number(response.start_time.split(':')[1])
    }
    this.endTime = {
      hours: Number(response.end_time.split(':')[0]),
      minutes: Number(response.end_time.split(':')[1])
    }
  }
}

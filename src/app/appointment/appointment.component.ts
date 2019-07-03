import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { NgbDateStruct, NgbTimeStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  date: NgbDateStruct;
  time: NgbTimeStruct;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
  }

  setDate(date: string) {
    this.date = new NgbDate(
      Number(date.split('-')[0]),
      Number(date.split('-')[1]),
      Number(date.split('-')[2])
    )
  }
}

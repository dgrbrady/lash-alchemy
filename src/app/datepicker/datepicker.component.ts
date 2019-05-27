import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {
  appointmentDate: NgbDateStruct;

  constructor() { }

  onDateSelect(date: NgbDateStruct) {
    this.appointmentDate = date;
  }
}

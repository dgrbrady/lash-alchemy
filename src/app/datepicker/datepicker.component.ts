import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbDatepicker, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [AppointmentService, NgbDatepickerConfig]
})
export class DatepickerComponent implements OnInit {
  model: NgbDateStruct;
  @Output() chooseDateEvent = new EventEmitter();

  constructor(private calendar: NgbCalendar) {}

  ngOnInit() {
    this.model = this.calendar.getToday();
  }

  isDisabled = (date: NgbDateStruct) => {
    const d = new Date(date.year, date.month -1, date.day);
    if (d.getDay() === 1) {
      return true;
    } else if (d.getDay() === 3) {
      return true;
    } else if (d.getDay() === 5) {
      return true;
    }
  }

  onDateSelect(date: NgbDateStruct) {
    this.model = date;
    this.chooseDateEvent.emit(`${date.year}-${date.month}-${date.day}`);
  }
}

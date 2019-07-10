import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Appointment } from '../appointment';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { FormControl } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentService } from '../appointment.service';
import { EventEmitter } from 'events';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  @ViewChild('dateInput') dateInput: ElementRef;
  @ViewChild('timeSelect') timeSelect: ElementRef;

  products = ['lashes1', 'lashes2', 'lashes3']
  times = ['9:00 AM', '12:00 PM', '3:00 PM']
  // timeSlots = [
  //   {hours: }
  // ]
  model = {
    date: {},
    // time: {
    //   hours: undefined,
    //   minutes: undefined
    // }
  };
  submitted = false;
  constructor(private calendar: NgbCalendar, private appoinmentService: AppointmentService) { }

  ngOnInit() {
    this.model.date = this.calendar.getToday();
    this.dateInput.nativeElement.dispatchEvent(new Event('change'));
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  selectDate(event) {
    let selectedDate = {
      year: undefined,
      month: undefined,
      day: undefined
    };
    selectedDate.year = event.year ? event.year : event.target.value.split('-')[0];
    selectedDate.month = event.month ? event.month : event.target.value.split('-')[1];
    selectedDate.day = event.day ? event.day : event.target.value.split('-')[2];
    const appointments: Appointment[] = [];
    this.appoinmentService.fetchAppointmentsOnDay(selectedDate)
      .then(obs => obs.toPromise().then())
      .then(async (response: Object[]) => {
        await response.forEach((appointment: Object) => appointments.push(new Appointment(appointment)));
        this.setTimeDisabled(appointments);
      })
      .catch((response: HttpErrorResponse) => console.warn(response.error));
  }

  setTimeDisabled(appointments: Appointment[]) {
    appointments.forEach((appointment) => {
      this.times.forEach((time) => {
        if (Number(appointment.startTime.hours) <= Number(time.split(':')[0]) &&
            Number(appointment.endTime.hours) >= Number(time.split(':')[0])) {
              for (let option of this.timeSelect.nativeElement.options) {
                if (option.value == time) {
                  option.disabled = true;
                }
              }
            }
      })
    })
  }
  selectTime(event) {
    console.log('SELECT TIME EVENT', event);
    console.log('SELECT ELEMENT', this.timeSelect.nativeElement);
    // const parsedTime = event.target.value.split(':');
    // let parsedHours = Number(parsedTime[0]);
    // if (parsedTime[1].split(' ')[1] === 'PM') {
    //   parsedHours += 12;
    // }
    // this.model.time = {
    //   hours: parsedHours,
    //   minutes: Number(parsedTime[1].split(' ')[0])
    // };
    // return 'asdf';
  }
  isDayDisabled = (date: NgbDateStruct) => {
    const d = new Date(date.year, date.month -1, date.day);
    if (d.getDay() === 1) {
      return true;
    } else if (d.getDay() === 3) {
      return true;
    } else if (d.getDay() === 5) {
      return true;
    }
  }
  get diagnostic() { return JSON.stringify(this.model); }
}

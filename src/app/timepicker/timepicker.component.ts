import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent {
  time = {hour: 8, minute: 30};
  @Input() foo;
  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;
    console.log(value);
    if (!value) {
      return null;
    }
    if (value.hour < 8) {
      return {tooEarly: true};
    }
    if (value.hour > 16) {
      return {tooLate: true};
    }
    return null;
  }).registerOnChange(this.setTime);

  constructor() { }

  setTime(timeEvent) {
    console.log(timeEvent);
  }
}

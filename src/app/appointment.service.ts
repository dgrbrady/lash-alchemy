import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from './appointment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointmentUrl = 'https://api.lashalchemy.biz/appointments';

  constructor(private http: HttpClient) {
  };

  async getAppointments() {
    const appointments: Appointment[] = [];
    await this.http.get(this.appointmentUrl).toPromise()
      .then((response: Appointment[]) => {
        response.forEach((appointment: Appointment) => appointments.push(new Appointment(appointment)));
      });
    return appointments;
  }

  async fetchAppointmentsOnDay(date: NgbDateStruct) {
    const url = this.appointmentUrl + `?q_date=${date.year}-${date.month}-${date.day}`;
    return await this.http.get(url);
  }
}

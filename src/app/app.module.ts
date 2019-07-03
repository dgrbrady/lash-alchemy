import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BusinessCardsComponent } from './business-cards/business-cards.component';
import { SlidesComponent } from './slides/slides.component';
import { HomeComponent } from './home/home.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SentryErrorHandler } from './sentry/sentry.component';
import { SelectComponent } from './select/select.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

const appRoutes: Routes = [
  {path: 'schedule', component: AppointmentComponent },
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Lash Alchemy'}
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BusinessCardsComponent,
    SlidesComponent,
    HomeComponent,
    DatepickerComponent,
    SelectComponent,
    AppointmentComponent,
    TimepickerComponent,
    AppointmentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  // providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }

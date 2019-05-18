import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BusinessCardsComponent } from './business-cards/business-cards.component';
import { SlidesComponent } from './slides/slides.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const appRoutes: Routes = [
  {path: 'schedule', component: ScheduleComponent },
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
    ScheduleComponent,
    HomeComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

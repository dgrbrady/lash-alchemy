import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: any;
  constructor(route: ActivatedRoute) {
    route.data.subscribe(val => {
      this.title = val.title
    });
  }

  ngOnInit() {
  }

}

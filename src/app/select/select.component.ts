import { Component, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  options: HTMLOptionElement[];
  constructor(options: any[]) {
    this.options = options.map((data) => new Option(data.text, data.value))
  }

  ngOnInit() {
  }

}

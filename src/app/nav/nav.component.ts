import { Component, OnInit } from '@angular/core';
import { NavOption } from '../nav-option';
import { TOPNAVOPS } from '../mock-topNavOptions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navOptions: NavOption[];
  selectedOption: NavOption;
  onSelect(option: NavOption): void {
    if (this.selectedOption) {
      this.selectedOption.status = '';
    }
    this.selectedOption = option;
    this.selectedOption.status = 'active';
  }
  constructor() {}

  ngOnInit() {
    this.navOptions = this.getNavOptions();
  }

  getNavOptions(): NavOption[] {
    const navOptions = TOPNAVOPS;
    this.onSelect(navOptions[0]);
    return navOptions;
  }
}

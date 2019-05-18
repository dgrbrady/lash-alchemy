import { Component, OnInit } from '@angular/core';
import { CARDS } from '../mock-cards';
import { Card } from '../card';

@Component({
  selector: 'app-business-cards',
  templateUrl: './business-cards.component.html',
  styleUrls: ['./business-cards.component.css']
})
export class BusinessCardsComponent implements OnInit {

  constructor() { }
  cards: Card[];

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.cards = CARDS;
  }
}

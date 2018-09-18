import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  hoveredCard = {};
  cards = {list: []};

  constructor(private http: HttpClient) {
    this.loadCards()
    .subscribe((result) => {
      console.log(`Cards: ${result}`);
    });
  }

  loadCards() {
    return this.http.get('https://server.collective.gg/api/public-cards');
  }
  getCard(cardName) {
    let uid = -1;
    this.cards.list.forEach(card => {
      if (card.card.text.Name === cardName) {
        uid = card.card.UID;
      }
    });
    return this.http.get('https://server.collective.gg/api/card/' + uid);
  }
}

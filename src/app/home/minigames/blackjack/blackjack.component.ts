import { Component } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.scss']
})
export class BlackjackComponent {
  deck!: Array<Card>;
  myHand: Array<Card> = [];
  maxCardInHandAllowed: number = 5;
  handValue: number = 0;
  amountACard: number = 0;
  is21: boolean = false;
  constructor() {
  }
  
  ngOnInit() {
    this.deck = this.generateCards();
    this.myHand.push(this.takeOneCard());
    this.myHand.push(this.takeOneCard());
  }

  takeOneCard(): Card {
    const randomIndex1 = Math.floor(Math.random() * this.deck.length);
    const cardWithdrawn: Card = this.deck[randomIndex1];
    this.deck.splice(randomIndex1, 1);
    return cardWithdrawn;
  }

  takeCard() {
    this.myHand.push(this.takeOneCard());
    this.calculateHandValue(this.myHand);
    if (this.handValue > 21) { console.log("you lose"); } else if (this.handValue == 21) { console.log("you win"); this.is21 = true;  }
    else { console.log("want to take another one?"); }
    console.log('Cards remaining in deck: %d', this.deck.length);
  }

  resetGame(){
    this.deck.length = 0;
    this.deck = this.generateCards();
    this.myHand.length = 0;
    this.myHand.push(this.takeOneCard());
    this.myHand.push(this.takeOneCard());
    this.calculateHandValue(this.myHand);
    this.is21 = false;
  }

  generateCards(): Array<Card> {
    let cardsSymbols: Array<string> = ["!", "@", "#", "$"];
    let cardsValues: Array<string> = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
    let finalarr = cardsSymbols.flatMap((cardSymbol) => {
      return cardsValues.map((cardValue) => new Card(`${cardValue}`, `${cardSymbol}`));
    });
    return finalarr;
  }

  calculateHandValue(hand: Array<Card>): number {
    this.handValue = 0;
    this.amountACard = 0;
    hand.forEach(element => {
      if (["J", "Q", "K"].includes(element.value)) {
        this.handValue += 10; 
        return;
      }
      if (element.value == "A") { this.amountACard++; return; };
      this.handValue += Number.parseInt(element.value);
      return;
    });
    for (let i = 0; i < this.amountACard; i++) {
      if (this.handValue + 11 <= 21) { this.handValue += 11; continue; }
      this.handValue++;
    }
    console.log('Hand value is: %d', this.handValue);
    return this.handValue;
  }
}

class Card {
  value: string;
  token: string;
  isHidden: boolean = true;
  constructor(value: string, token: string) {
    this.value = value;
    this.token = token;
  }

  revealFlip() {
    this.isHidden = false;
  }
}
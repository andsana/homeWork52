import Card from './Card';

export default class PokerHand {
  private hand: Card[];

  constructor(hand: Card[]) {
    this.hand = hand;
  }

  getOutcome(): string {
    if (this.isPair()) {
      return 'Одна пара';
    } else if (this.isTwoPairs()) {
      return 'Две пары';
    } else if (this.isThreeOfAKind()) {
      return 'Тройка';
    } else if (this.isFlush()) {
      return 'Флэш';
    } else {
      return 'Старшая карта';
    }
  }

  private isPair(): boolean {
    const ranks = this.hand.map(card => card.rank);
    const uniqueRanks = new Set(ranks);
    return uniqueRanks.size === 4;
  }

  private isThreeOfAKind(): boolean {
    const ranks = this.hand.map(card => card.rank);
    for (let i = 0; i < ranks.length; i++) {
      let count = 0;
      for (let j = 0; j < ranks.length; j++) {
        if (ranks[i] === ranks[j]) {
          count++;
        }
      }
      if (count === 3) {
        return true;
      }
    }
    return false;
  }

  private isTwoPairs(): boolean {
    const ranks = this.hand.map(card => card.rank);
    const uniqueRanks = new Set(ranks);
    return uniqueRanks.size === 3;
  }

  private isFlush(): boolean {
    const ranks = this.hand.map(card => card.rank);
    const uniqueRanks = new Set(ranks);
    return uniqueRanks.size === 1;
  }
}


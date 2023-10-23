import Card from './Card';

const suits = ['hearts', 'diams', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export default class CardDeck {
    private deck: Card[];

    constructor() {
        this.deck = [];
        for (const suit of suits) {
            for (const rank of ranks) {
                this.deck.push(new Card(rank, suit));
            }
        }
    }

    getCard(): Card {
        const randomIn = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(randomIn, 1)[0];
    }

    getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}

import {useState} from 'react';
import Card from './lib/Card';
import CardDeck from './lib/CardDeck';
import PokerHand from "./lib/PokerHand";
import './App.css';
import MyCard from './MyCard';

const App = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [outcome, setOutcome] = useState<string>('');

    const dealCards = () => {
        const cardDeck = new CardDeck();
        const drawnCards = cardDeck.getCards(5);
        setCards(drawnCards);

        const pokerHand = new PokerHand(drawnCards);
        const handOutcome = pokerHand.getOutcome();
        setOutcome(handOutcome);
    };

    return (
        <div className="App">
            <button className="button" onClick={dealCards}>Deal draw</button>
            {cards.length !== 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <MyCard key={index} rank={card.rank} suit={card.suit}/>
                    ))}
                </div>
            )}
            {outcome && <div>{outcome}</div>}
        </div>
    );
};

export default App;



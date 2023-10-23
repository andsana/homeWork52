import { useState } from 'react';
import Card from './lib/Card';
import CardDeck from './lib/CardDeck';
import './App.css';
import MyCard from './MyCard';

const App = () => {
    const [cards, setCards] = useState<Card[]>([]);

    const dealCards = () => {
        const cardDeck = new CardDeck();
        const drawnCards = cardDeck.getCards(5);
        setCards(drawnCards);
    };

    return (
        <div className="App">
            <button className="button" onClick={dealCards}>Раздать карты</button>
            {cards.length !== 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <MyCard key={index} rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;



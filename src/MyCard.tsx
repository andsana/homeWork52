import React from 'react';
import './cards.css';

interface Props {
    rank: string;
    suit: string;
}

const getSuitSymbol = (suit: string) => {
    switch (suit) {
        case 'diams':
            return '♦';
        case 'hearts':
            return '♥';
        case 'clubs':
            return '♣';
        case 'spades':
            return '♠';
        default:
            return '';
    }
};

const MyCard: React.FC<Props> = ({rank, suit}) => {
    return (
        <span className={`card rank-${rank} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className={suit}>{getSuitSymbol(suit)}</span>
    </span>
    );
};

export default MyCard;
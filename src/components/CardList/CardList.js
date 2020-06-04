import React, { useState, useEffect } from 'react';
import './cardList.scss';
import Card from '../Card/Card';

const CardList = ({ cards }) => {
  const [printedCards, setPrintedCards] = useState([]);
  const cardsPerLoad = 5;

  useEffect(() => {

    if (cards.length !== 0 || printedCards.length < cards.length) {

      const timeout = setTimeout(() => {
        console.log('setTimeout');

        setPrintedCards(cards.slice(printedCards.length, printedCards.length + cardsPerLoad));
      }, 1000);

      return () => {
        clearTimeout(timeout);
      }
    }
  });

  return (
    <div className="card-list">
      {cards.length ? (
        printedCards.map(card => <Card card={card} key={card.id} />)
      ) : (
          <div className="text-center">No cards found</div>
        )}
    </div>
  );
};

export default CardList;
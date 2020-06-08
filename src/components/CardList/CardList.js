import React from 'react';
import './cardList.scss';
import Card from '../Card/Card';

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.length ? (
        cards.map(card => <Card card={card} key={card.id} />)
      ) : (
          <div className="text-center">No cards found</div>
        )}
    </div>
  );
};

export default CardList;

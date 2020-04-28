import React from 'react';
import './cardList.scss';
import Card from '../Card/Card';

const CardList = ({cards}) => {
  return (
    <>
      {cards.length ? (
        cards.map(card => <Card card={card} key={card.id} />)
      ) : (
        <div className="text-center">No cards found</div>
      )}
    </>
  );
};

export default CardList;

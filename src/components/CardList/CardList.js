import React from 'react';
import './cardList.scss';

const CardList = ({cards}) => {
  return (
    <>
      {cards.length ? (
        cards.map(card => (
          <a key={card.id} data-name={card.id} href="#">
            <img
              className="card-img"
              src={card.card_images[0].image_url_small}
              alt={card.name}
            />
          </a>
        ))
      ) : (
        <div className="text-center">No cards found</div>
      )}
    </>
  );
};

export default CardList;

import React from 'react';
import './card.scss';

const Card = ({card}) => {
  return (
    <a data-name={card.id} href="#">
      <img
        className="card-img"
        src={card.card_images[0].image_url_small}
        alt={card.name}
      />
    </a>
  );
};

export default Card;

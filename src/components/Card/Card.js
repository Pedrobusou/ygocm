import React, {useState} from 'react';
import './card.scss';

const Card = ({card}) => {
  const [failed, setFailed] = useState(false);
  const src = failed
    ? card.card_images[0].image_url_small.replace('storage.googleapis.com/', '')
    : card.card_images[0].image_url_small;

  return (
    <a className="card-img" data-name={card.id} href="#">
      <img src={src} alt={card.name} onError={() => setFailed(true)} />
    </a>
  );
};

export default Card;

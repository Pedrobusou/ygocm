import React from 'react';
import './cardList.scss';

const CardList = ({ cards }) => {
    return (
        <>
            {cards.map(card => (
                <a key={card.id} data-name={card.id} href="">
                    <img className="card-img" src={card.card_images[0].image_url_small} />
                </a>
            ))}
        </>
    );
}

export default CardList;
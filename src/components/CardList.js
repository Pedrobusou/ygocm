import React from 'react';

const CardList = ({ cards }) => {
    return (
        <>
            {cards.map(card => (
                <img key={card.id} src={card.card_images[0].image_url_small} />
            ))}
        </>
    );
}

export default CardList;
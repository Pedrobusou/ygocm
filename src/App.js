import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList';
import axios from 'axios'

const App = () => {
  const [cards, setCards] = useState([]);

  const endpoint = {
    single: 'https://db.ygoprodeck.com/api/v5/cardinfo.php?name=Dark%20Magician',
    all: 'https://db.ygoprodeck.com/api/v5/cardinfo.php'
  }

  useEffect(() => {
    if (!cards.length) {
      (async () => {
        const response = await axios(endpoint.all);
        setCards(response.data);
      })();
    }
  })

  return <CardList cards={cards} />;
}


export default App;

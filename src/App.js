import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import axios from 'axios'

const App = () => {
  const [cards, setCards] = useState([]);

  const endpoint = {
    single: 'https://db.ygoprodeck.com/api/v5/cardinfo.php?name=Dark%20Magician',
    search: 'https://db.ygoprodeck.com/api/v5/cardinfo.php?fname=Crystal',
    all: 'https://db.ygoprodeck.com/api/v5/cardinfo.php'
  }

  useEffect(() => {
    if (!cards.length) {
      (async () => {
        const response = await axios(endpoint.search);
        setCards(response.data);
      })();
    }
  })

  return <CardList cards={cards} />;
}


export default App;

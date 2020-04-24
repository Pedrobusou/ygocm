import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';

const App = () => {
  const [cards, setCards] = useState([]);
  const apiSearch = 'https://db.ygoprodeck.com/api/v5/cardinfo.php?fname=';

  const searchCards = async filters => {
    let newCards = [];

    try {
      newCards = (await axios(apiSearch + filters.cardName)).data;
    } catch (error) {}

    setCards(newCards);
  };

  return (
    <>
      <Header searchCards={searchCards} />
      <CardList cards={cards} />
    </>
  );
};

export default App;

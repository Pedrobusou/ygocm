import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';

const App = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiSearch = 'https://db.ygoprodeck.com/api/v5/cardinfo.php?fname=';

  //Could be turned into customHook with useeffect and filters state obj
  const searchCards = async filters => {
    setLoading(true);

    let newCards = [];

    try {
      newCards = (await axios(apiSearch + filters.cardName)).data;
    } catch (error) {}

    setCards(newCards);
    setLoading(false);
  };

  return (
    <>
      <Header searchCards={searchCards} loading={loading} />
      <CardList cards={cards} />
    </>
  );
};

export default App;

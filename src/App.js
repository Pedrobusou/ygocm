import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
    <Router>
      <Header searchCards={searchCards} loading={loading} />

      <Switch>
        <Route path="/decklist">
          <h1>Deck list page</h1>
        </Route>

        <Route path="/wishlist">
          <h1>Wishlist page</h1>
        </Route>

        <Route path="/">
          <CardList cards={cards} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

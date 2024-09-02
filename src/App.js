import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LocalStorage} from './LocalStorage';

import DocumentTitle from 'react-document-title';

const App = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiSearch = 'https://db.ygoprodeck.com/api/v5/cardinfo.php?sort=new&';

  const stringifyFilters = filters => {
    const filtersArr = [];

    for (const key in filters) {
      filtersArr.push(`${key}=${filters[key]}`);
    }

    return filtersArr.join('&');
  };

  //Could be turned into customHook with useeffect and filters state obj
  const searchCards = async filters => {
    setLoading(true);

    let newCards = [];

    try {
      newCards = (await axios(apiSearch + stringifyFilters(filters))).data;
    } catch (error) {}

    newCards.slice(0, 5).forEach(c => {
      LocalStorage.addCard(c.id, 'wishlist');
    });

    setCards(newCards);
    setLoading(false);
  };

  useEffect(() => {
    searchCards();
  }, []);

  return (
    <Router>
      <Header searchCards={searchCards} loading={loading} />

      <Switch>
        <Route path="/decklist">
          <DocumentTitle title="Decklist">
            <h1>Deck list page</h1>
          </DocumentTitle>
        </Route>

        <Route path="/wishlist">
          <DocumentTitle title="Wishlist">
            <h1>Wishlist page</h1>
          </DocumentTitle>
        </Route>

        <Route path="/">
          <DocumentTitle title="Homepage">
            <CardList cards={cards} />
          </DocumentTitle>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

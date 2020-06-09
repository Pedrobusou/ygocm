const PREFIX = 'ygocm_';

const handler = (target, action) => {
  const key = PREFIX + target;
  let cards = LocalStorage.getCards(key);

  cards = action(cards);

  localStorage.setItem(key, JSON.stringify(cards));
};

export class LocalStorage {
  static add(id) {
    const addCard = cards => [...cards, id];
    return {to: target => handler(target, addCard)};
  }

  static delete(id) {
    const deleteCard = cards => cards.filter(c => c !== id);
    return {from: target => handler(target, deleteCard)};
  }

  static getCards(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
}

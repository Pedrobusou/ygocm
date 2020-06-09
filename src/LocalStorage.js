const PREFIX = 'ygocm_';

/**
 *
 * @param {string} target
 * @param {*} action
 */
const handler = (target, action) => {
  const key = PREFIX + target;
  let cards = LocalStorage.getCards(target);

  cards = action(cards);

  localStorage.setItem(key, JSON.stringify(cards));
};

export class LocalStorage {
  /**
   *
   * @param {string} cardId
   * @param {string} target
   */
  static addCard(cardId, target) {
    handler(target, cardIds => [...cardIds, cardId]);
  }

  /**
   *
   * @param {string} cardId
   * @param {string} target
   */
  static deleteCard(cardId, target) {
    handler(target, cardIds => cardIds.filter(c => c !== cardId));
  }

  /**
   *
   * @param {string} target
   * @returns {[string]} cardIds
   */
  static getCards(target) {
    return JSON.parse(localStorage.getItem(PREFIX + target)) || [];
  }
}

import React, {useState} from 'react';

const CardNameFilter = ({searchCards}) => {
  const [cardName, setCardName] = useState('');

  const handleChange = event => {
    setCardName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchCards({cardName});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        placeholder="Introduce card name"
        onChange={handleChange}
        value={cardName}
      />
    </form>
  );
};

export default CardNameFilter;

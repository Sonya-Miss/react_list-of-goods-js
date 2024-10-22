import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [visibleGoods, setVisibleGoods] = useState(goodsFromServer);
  const [sortOrder, setSortOrder] = useState('');

  const sortByName = () => {
    setVisibleGoods(prevGoods => [...prevGoods].sort());
    setSortOrder('alphabetical');
  };

  const sortByLength = () => {
    // eslint-disable-next-line max-len, prettier/prettier
    setVisibleGoods(prevGoods => [...prevGoods].sort((a, b) => a.length - b.length));
    setSortOrder('length');
  };

  const reverseGoods = () => {
    setVisibleGoods(prevGoods => [...prevGoods].reverse());
    setSortOrder('reversed');
  };

  const resetGoods = () => {
    setVisibleGoods(goodsFromServer);
    setSortOrder('');
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${sortOrder === 'alphabetical' ? '' : 'is-light'}`}
          onClick={sortByName}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${sortOrder === 'length' ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${sortOrder === 'reversed' ? '' : 'is-light'}`}
          onClick={reverseGoods}
        >
          Reverse
        </button>

        {sortOrder && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={resetGoods}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

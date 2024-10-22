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
  const [isReversed, setIsReversed] = useState(false);
  const [sortedGoods, setSortedGoods] = useState(goodsFromServer);
  const [activeButton, setActiveButton] = useState('');
  const [hasChanged, setHasChanged] = useState(false);

  const applyReverse = goods => {
    return isReversed ? [...goods].reverse() : goods;
  };

  const sortByName = () => {
    const sorted = [...goodsFromServer].sort();

    setSortedGoods(sorted);
    setVisibleGoods(applyReverse(sorted));
    setActiveButton('alphabetical');
    setHasChanged(true);
  };

  const sortByLength = () => {
    const sorted = [...goodsFromServer].sort((a, b) => a.length - b.length);

    setSortedGoods(sorted);
    setVisibleGoods(applyReverse(sorted));
    setActiveButton('length');
    setHasChanged(true);
  };

  const reverseGoods = () => {
    setIsReversed(prev => !prev);
    setVisibleGoods([...sortedGoods].reverse());
    setActiveButton('reverse');
    setHasChanged(true);
  };

  const resetGoods = () => {
    setSortedGoods(goodsFromServer);
    setVisibleGoods(goodsFromServer);
    setIsReversed(false);
    setActiveButton('');
    setHasChanged(false);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${activeButton === 'alphabetical' ? '' : 'is-light'}`}
          onClick={sortByName}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${activeButton === 'length' ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${isReversed ? '' : 'is-light'}`}
          onClick={reverseGoods}
        >
          Reverse
        </button>

        {hasChanged && (
          <button
            type="button"
            className="button is-danger"
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

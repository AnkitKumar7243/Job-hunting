import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './filter.module.css';

const Filter = () => {
  const { filter, setFilter } = useContext(GlobalContext);

  function handleRemove(item) {
    setFilter(filter.filter(value => value !== item))
  }

  function handleClear() {
    setFilter([]);
  }

  return (
    <div className={styles.filter}>
      <ul className={styles.tags}>
        {filter.length !== 0 && filter.map(item => (
          <li key={item}>
            {item}
            <div className={styles.remove} onClick={() => handleRemove(item)}>
              <img src="../../images/icon-remove.svg" alt="Remove" />
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default Filter;
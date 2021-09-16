import React from 'react';
import styles from './stars.module.scss';
import red from '../../image/red-star.svg';
import gray from '../../image/gray-star.svg';

function Stars({star}) {

  const stars = [1,2,3,4,5];

  return (
    <ul className={styles.list}>
      {stars.map((item) => {
        return +item <= star ? (
          <li key={item} className={styles.item}><img src={red} alt="Красная звёздочка" /></li>
        ) : (
          <li key={item} className={styles.item}><img src={gray} alt="Серая звёздочка" /></li>
        );
      })}      
    </ul>
  );
}
  
  export default Stars;
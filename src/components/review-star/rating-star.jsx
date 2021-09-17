import React, { Fragment } from 'react';
import styles from './rating-star.module.scss';

function RatingStar() {

  const stars = [5,4,3,2,1];

  return (
    <ul className={styles.list}>
    {stars.map((item) => (
      <Fragment key={item}>
        <input
          className={styles.input}
          id={`star-${item}`}
          type="radio"
          name="rating"
          value={item}
        />
        <label
          className={styles.label}
          htmlFor={`star-${item}`}
          tabIndex="0"
        >
          Rating {item}
        </label>
      </Fragment>
    ))}
    </ul>
  );
}
  
  export default RatingStar;
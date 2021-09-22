import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './rating-star.module.scss';
import { STARS } from '../../utils/constants';

function RatingStar({rating, setRating}) {

  return (
    <ul className={styles.list}>
    {STARS.map((item) => (
      <Fragment key={item}>
        <input
          className={styles.input}
          id={`star-${item}`}
          type="checkbox"
          name="rating"
          value={item}
          checked={+item === +rating ? true : false}
          onChange={(evt) => setRating(evt.target.value)}
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

RatingStar.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  setRating: PropTypes.func.isRequired,
};

export default RatingStar;
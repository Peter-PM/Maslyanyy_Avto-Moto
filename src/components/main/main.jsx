import React from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.scss';
import Slider from '../slider/slider';
import Info from '../info/info';
import Tabs from '../tabs/tabs';

function Main({setView, newCommentary}) {
  return (
    <main className={styles.main}>
      <Slider/>
      <Info/>
      <Tabs
        setView={setView}
        newCommentary={newCommentary}
      />
    </main>
  );
}

Main.propTypes = {
  setView: PropTypes.func.isRequired,
  newCommentary: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      advantages: PropTypes.string.isRequired,
      limitations: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  ]).isRequired,
};

export default Main;

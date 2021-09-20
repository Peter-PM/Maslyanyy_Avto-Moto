import React from 'react';
import styles from './main.module.scss';
import Slider from '../slider/slider';
import Info from '../info/info';
import Tabs from '../tabs/tabs';

function Main({newCommentary, setView}) {
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

export default Main;

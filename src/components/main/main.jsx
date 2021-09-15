import React from 'react';
import styles from './main.module.scss';
import Slider from '../slider/slider';
import Info from '../info/info';
import Tabs from '../tabs/tabs';


function Main() {
  return (
    <main className={styles.main}>
      <Slider/>
      <Info/>
      <Tabs/>
    </main>
  );
}

export default Main;

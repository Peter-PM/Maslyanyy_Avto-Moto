import React, { useState } from 'react';
import styles from './slider.module.scss';
import arrow from '../../image/arrow.svg'
import arrowOff from '../../image/arrow-off.svg'

const FIRST_FOTO = 1;
const LAST_FOTO = 3;

function Slider() {

  const [count, setCount] = useState(1);

  return (
    <section className={styles.slider}>
      <div>
        <img className={styles.mainImage} src={`../image/desktop-slide-${count}.jpg`}alt="Внешний вид машины" width="600" height="375"/>
      </div>
      <div className={styles.preview}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonLeft}`}
          onClick={() => {setCount(count-1)}}
          disabled={count === FIRST_FOTO ? true : false }>
          <img src={count === FIRST_FOTO ? arrowOff : arrow } alt="Стрелочка влево"/>
        </button>
        <ul className={styles.images}>
          <li>
            <img src="../image/desktop-slide-1-min.jpg" alt="Первая фотография" width="128" height="80"/>
          </li>
          <li>
            <img src="../image/desktop-slide-2-min.jpg" alt="Вторая фотография" width="128" height="80"/>
          </li>
          <li>
            <img src="../image/desktop-slide-3-min.jpg" alt="Третья фотография" width="128" height="80"/>
          </li>
        </ul>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonRight}`}
          onClick={() => {setCount(count+1)}}
          disabled={count === LAST_FOTO ? true : false }>
          <img src={count === LAST_FOTO ? arrowOff : arrow } alt="Стрелочка вправо"/>
        </button>
      </div>
    </section>
  );
}

export default Slider;
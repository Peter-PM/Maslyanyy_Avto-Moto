import React from 'react';
import styles from './popup.module.scss';
import RatingStar from '../review-star/rating-star';

function Popup() {
  return (
    <section className={styles.popup}>
      <h2 className={styles.title}>Оставить отзыв</h2>
      <button className={styles.close} type="button">
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z" fill="#9F9E9E"/></svg>
      </button>
      <form className={styles.form} action="post">
        <label className={styles.hidden} htmlFor="name">Имя</label>
        <input className={styles.input} type="text" id="name"  placeholder="Имя" autoFocus required/>
        
        <div className={styles.grade}>
          <span>Оцените товар: </span>
          <RatingStar />
        </div>

        <label className={styles.hidden} htmlFor="advantages">Достоинства</label>
        <input className={styles.input} type="text" placeholder="Достоинства" id="advantages"/>

        <label className={styles.hidden} htmlFor="review">Комментарий</label>
        <textarea className={styles.area} name="review" id="review" placeholder="Комментарий" required></textarea>

        <label className={styles.hidden} htmlFor="limitations">Недостатки</label>
        <input className={styles.input} type="text" id="limitations" placeholder="Недостатки"/>
        <button className={styles.button} type="submit">
          Оставить отзыв
        </button>
      </form>
    </section>
  );
}

export default Popup;

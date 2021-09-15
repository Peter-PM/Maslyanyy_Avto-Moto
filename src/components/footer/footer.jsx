import React from 'react';
import styles from './footer.module.scss';

function Footer() {

  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}>Корпоративным клиентам</li>
        <li className={styles.item}>Клиентам</li>
        <li className={styles.item}>Аренда авто</li>
        <li className={styles.item}>Каршеринг</li>
        <li className={styles.item}>Как продать авто</li>
        <li className={styles.item}>trade-in</li>
        <li className={styles.item}>test drive</li>
      </ul>
    </footer>
  );
}

export default Footer;
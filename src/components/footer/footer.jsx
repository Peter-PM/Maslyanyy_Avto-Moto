import React from 'react';
import styles from './footer.module.scss';

function Footer() {

  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}><a href="#">Корпоративным клиентам</a></li>
        <li className={styles.item}><a href="#">Клиентам</a></li>
        <li className={styles.item}><a href="#">Аренда авто</a></li>
        <li className={styles.item}><a href="#">Каршерин</a>г</li>
        <li className={styles.item}><a href="#">Как продать авто</a></li>
        <li className={styles.item}><a href="#">trade-in</a></li>
        <li className={styles.item}><a href="#">test drive</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
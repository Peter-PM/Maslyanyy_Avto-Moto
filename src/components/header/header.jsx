import React from 'react';
import styles from './header.module.scss';
import Logo from '../logo/logo';

function Header() {

  return (
    <header className={styles.header}>
      <Logo/>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}><a href="#">Автомобили</a></li>
          <li className={styles.item}><a href="#">Контакты</a></li>
          <li className={styles.item}><a href="#">Услуги</a></li>
          <li className={styles.item}><a href="#">Вакансии</a></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
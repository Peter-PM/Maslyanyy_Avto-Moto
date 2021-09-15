import React from 'react';
import styles from './header.module.scss';
import Logo from '../logo/logo';

function Header() {

  return (
    <header className={styles.header}>
      <Logo/>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>Автомобили</li>
          <li className={styles.item}>Контакты</li>
          <li className={styles.item}>Услуги</li>
          <li className={styles.item}>Вакансии</li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
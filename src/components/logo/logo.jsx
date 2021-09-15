import React from 'react';
import styles from './logo.module.scss';
import logo from '../../image/logo.svg'

function Logo() {
  return (
    <a href="/" className={styles.logo}>
      <img src={logo} alt="logo" width="55" height="55"/>
      <p className={styles.title}>
        <span className={styles.avto}>Avto</span> <span className={styles.moto}>moto</span>
      </p>
      
    </a>
  );
}

export default Logo;

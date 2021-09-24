import React from 'react';
import PropTypes from 'prop-types';
import styles from './logo.module.scss';
import logo from '../../image/logo.svg'

function Logo({mainPage}) {
  return (
    <>
    {mainPage ? (
      <span className={styles.logo}>
        <img src={logo} alt="logo" width="55" height="55"/>
        <p className={styles.title}>
          <span className={styles.avto}>Avto</span> <span className={styles.moto}>moto</span>
        </p>
      </span>
    ) : (
      <a href="/" className={styles.logo}>
        <img src={logo} alt="logo" width="55" height="55"/>
        <p className={styles.title}>
          <span className={styles.avto}>Avto</span> <span className={styles.moto}>moto</span>
        </p>
      </a>
    )}
    </>
  );
}

Logo.propTypes = {
  mainPage: PropTypes.bool.isRequired,
};

export default Logo;

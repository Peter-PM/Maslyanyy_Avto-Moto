import React from 'react';
import styles from './add-comment.module.scss';
import Stars from '../stars/stars';

function AddComment({commentary}) {

  return (
    <article className={styles.comment}>
        <p className={styles.user}>{commentary.name}</p>
        <dl className={styles.list}>

          {commentary.advantages ? (
            <>
              <dt className={`${styles.term} ${styles.term_plus} ${styles.decoration}`}>Достоинства</dt>
              <dd className={`${styles.item} ${styles.decoration}`}>{commentary.advantages}</dd>
            </>
          ) : (
            ''
          )}

          {commentary.limitations ? (
            <>
              <dt className={`${styles.term} ${styles.term_minus} ${styles.decoration}`}>Недостатки</dt>
              <dd className={`${styles.item} ${styles.decoration}`}>{commentary.limitations}</dd>
            </>
          ) : (
            ''
          )}         

          <dt className={styles.term}>Комментарий</dt>
          <dd className={styles.item}>{commentary.comment}</dd>

        </dl>
        <div className={styles.assessment}>
          <Stars
          star={commentary.rating}
          />
          <span className={styles.recommendation}>{commentary.rating > 3 ? 'Советует' : ''}</span>
        </div>
        <div className={styles.feedback}>
          <span className={styles.time}>{commentary.date}</span>
          <a href="#" className={styles.reply}>Ответить</a>
        </div>
      </article>
  );
}
  
  export default AddComment;
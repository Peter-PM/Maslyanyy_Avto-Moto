import React, { useState } from 'react';
import styles from './tabs.module.scss';
import Details from '../details/details';
import Comments from '../comments/comments';
import Contacts from '../contacts/contacts';

const Tab = {
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
  CONTACTS: 'Contacts',
};

function Tabs({setView, newCommentary}) {

  const renderTab = (tab) => {
    switch (tab) {
      case Tab.REVIEWS:
        return <Comments 
                setView={setView}
                newCommentary={newCommentary}
              />;
      case Tab.CONTACTS:
        return <Contacts/>;
      default:
        return <Details/>;
    }
  }

  const [activeTab, setActiveTab] = useState(Tab.DETAILS);
  
  return (
    <section className={styles.tabs}>
      <ul className={styles.list}>
        <li
          className={`${styles.item} ${activeTab === Tab.DETAILS && styles.itemActive}`}
          onClick={()=>{setActiveTab(Tab.DETAILS)}}
        >
          Характеристики
        </li>
        <li
          className={`${styles.item} ${activeTab === Tab.REVIEWS && styles.itemActive}`}
          onClick={()=>{setActiveTab(Tab.REVIEWS)}}
         >
           Отзывы
        </li>
        <li
          className={`${styles.item} ${activeTab === Tab.CONTACTS && styles.itemActive}`}
          onClick={()=>{setActiveTab(Tab.CONTACTS)}}
        >
          Контакты
        </li>
      </ul>
      {renderTab(activeTab)}
    </section>
  );
}

export default Tabs;
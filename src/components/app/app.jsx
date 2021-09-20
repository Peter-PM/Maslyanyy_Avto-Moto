import React, { useState } from 'react';
import './app.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import Popup from '../popup/popup';

function App() {

  const [viewPopup, setView] = useState(false);
  const [newCommentary, setNewCommentary] = useState({});

  return (
    <>
      <Header/>
      <Main
        setView={setView}
        newCommentary={newCommentary}
        />
      <Footer/>
      <Popup
        viewPopup={viewPopup}
        setView={setView}
        setNewCommentary={setNewCommentary}
      />
    </>
  );
}

export default App;

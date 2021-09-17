import React, { useState } from 'react';
import './app.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import Popup from '../popup/popup';

function App() {

  const [viewPopup, setView] = useState(false);

  return (
    <>
      <Header/>
      <Main
        setView={setView}/>
      <Footer/>
      <Popup
        viewPopup={viewPopup}
        setView={setView}
      />
    </>
  );
}

export default App;

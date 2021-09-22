import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app';

document.getElementById('root').style = "display: flex; flex-direction: column; justify-content: space-between; min-height: 100vh;";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './components/Button'
import reportWebVitals from './reportWebVitals';
import Table from './components/Table';
import Counter from './components/Counter'

ReactDOM.render(
  <React.StrictMode>
    <Counter val='0'/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

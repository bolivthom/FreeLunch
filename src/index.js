import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import ContextWrapper from './components/context/ContextWrapper'
import 'bootstrap/dist/css/bootstrap-grid.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

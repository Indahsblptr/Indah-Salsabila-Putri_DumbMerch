// untuk memanggil react
import React from 'react';
// untuk mengubah isi elemen didalam html
import ReactDOM from 'react-dom';
// untuk memanggil file scc
import './index.css';
// memanggil memanggil app 

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

// render aplikasi app
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


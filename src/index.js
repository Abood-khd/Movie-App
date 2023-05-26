import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js.map';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { Provider } from 'react-redux';
import store from './Components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <App/>

</Provider>

);


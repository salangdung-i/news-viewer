import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewsService from './services/newsService';
import { BrowserRouter } from '../node_modules/react-router-dom/index';


const newsService = new NewsService();
ReactDOM.render(
  <BrowserRouter>
    <App newsService={newsService} />
  </BrowserRouter>,
  document.getElementById('root')
);



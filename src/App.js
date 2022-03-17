import React from 'react';
import NewsPage from './components/newsPage/newsPage';
import { Route } from 'react-router';
import { Routes } from '../node_modules/react-router/index';


const App = ({ newsService }) => {
  return (
    <Routes >
      <Route path="/" element={<NewsPage newsService={newsService} />} />
      <Route path="/:category" element={<NewsPage newsService={newsService} />} />
    </Routes >
  );
}

export default App;


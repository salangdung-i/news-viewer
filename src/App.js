import React, { useState } from 'react';
import axios from '../node_modules/axios/index';
import Categories from './components/Categories';
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';

const App = () => {
  return (
    <div>
      <Categories />
      <NewsList />;
    </div>
  )
};

export default App;
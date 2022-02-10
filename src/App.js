import React, { useCallback, useState } from 'react';
import axios from '../node_modules/axios/index';
import Categories from './components/Categories';
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />;
    </div>
  )
};

export default App;
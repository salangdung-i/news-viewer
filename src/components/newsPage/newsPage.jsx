import React from 'react';
import { useParams } from 'react-router';

import Categories from '../categories/categories';
import NewsList from '../newsList/newsList';

const NewsPage = ({ newsService }) => {
  const params = useParams();
  const category = params.category || 'all';
  return (
    <>
      <Categories category={category} />
      <NewsList newsService={newsService} category={category} />
    </>
  );
}

export default NewsPage;
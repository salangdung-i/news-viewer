import React, { useEffect, useState } from 'react';
import NewsItem from '../newsItem/newsItem';
import styles from '../newsList/newsList.module.css';

const NewsList = ({ newsService, category }) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    // 뉴스 가져오기 
    const query = category === 'all' ? '' : `&category=${category}`;
    newsService.getNews(query).then(response => setArticles(response));
  }, [category]);

  return (
    <div className={styles.newsList}>
      {
        articles && articles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))}
    </div>
  );
};

export default NewsList;
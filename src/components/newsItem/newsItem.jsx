import React from 'react';
import styles from '../newsItem/newsItem.module.css';

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <div className={styles.newsItem}>
      <div className={styles.thumbmail}>
        <a href={url}>
          <img className={styles.img} src={urlToImage} alt="thumbmail" />
        </a>
      </div>
      <div className={styles.contents}>
        <h2 className={styles.h2}>
          <a className={styles.a} href={url}>
            {title}
          </a>
        </h2>
        <p className={styles.p}>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
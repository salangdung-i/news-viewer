import React from 'react';
import { useNavigate } from '../../../node_modules/react-router/index';
import styles from '../categories/categories.module.css';

const categories = [
  {
    name: 'all',
    text: '종합'
  },
  {
    name: 'business',
    text: '경제'
  },
  {
    name: 'entertainment',
    text: '방송/통신'
  },
  {
    name: 'general',
    text: '일반'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  }
];

const Categories = ({ category }) => {
  const navigate = useNavigate();
  const goToCategory = (category) => {
    navigate(`/${category}`);
  }

  return (
    <div className={styles.categories}>
      {categories.map(c =>
        <div
          className={`${styles.category} ${category === c.name ? styles.active : ''}`}
          key={c.name}
          onClick={() => goToCategory(c.name)}
        >
          {c.text}
        </div>
      )}
    </div>
  );
}

export default Categories;
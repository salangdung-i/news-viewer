// API를 요청하고 뉴스 데이터가 들어있는 배열을 컴포넌트 배열로 변환하여 랜더링 해주는 컴포넌트
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import usePromise from '../lib/usePromise';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=98e2a5c908f541c79f48db6c6ed77d61`
    );
  }, [category]);

  //대기중일때
  if (loading) {
    return <NewsListBlock> 대기중 ...</NewsListBlock>
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>
  }

  const { articles } = response.data;

  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>

  );
};

export default NewsList;
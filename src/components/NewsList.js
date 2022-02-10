// API를 요청하고 뉴스 데이터가 들어있는 배열을 컴포넌트 배열로 변환하여 랜더링 해주는 컴포넌트
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
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

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false); // 상태관리하여 API 요쳥이 대기중인지 판별할 것이다.

  // useEffect를 사용하여 컴포넌트가 처음 랜더링 되는 시점에 API를 요청하면된다. 
  // 여기서 주의 할 점은 useEffect에 등록하는 함수에 async를 붙이면 안된다.
  // useEffect에서 반환햐야하는 값은 뒷정리 함수이디 떄문이다.
  // 따라서 useEffect 내부에서 async/await을 사용하고 싶다면, 함수 내부에 async 키워드가 붙은 또다른 함수를 만들어 사용해야한다.  

  // 뒷정리 함수가 뭐야?
  useEffect(() => {
    // async를 사용하는 함수는 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=98e2a5c908f541c79f48db6c6ed77d61'
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [])

  //대기중일때
  if (loading) {
    return <NewsListBlock> 대기중 ...</NewsListBlock>
  }

  // 아직 articles 값이 설정되지 않았을 때
  // 배열을 map 함수를 사용하여 컴포넌트 배열로 변환할때 
  // articles를 조회하여 해당값이 null인지 확인해야한다. 
  // 아직 데이터가 없을 때 null에는 map 함수가 없기 때문에 랜더링 과정에서 오류가 발생한다. 


  if (!articles) {
    return null;
  }

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
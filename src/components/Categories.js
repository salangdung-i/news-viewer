import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from '../../node_modules/react-router-dom/index';

const categories = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비지니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
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
    name: 'sport',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px){
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoratoin: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${props =>
    props.active && css`
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
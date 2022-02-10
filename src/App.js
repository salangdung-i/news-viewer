import React, { useState } from 'react';
import axios from '../node_modules/axios/index';
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';

const App = () => {
  // const [data, setData] = useState(null);

  // // onClick 함수에서 axios.get 함수를 사용했다. 
  // // 이 함수는 파라미터로 전달된 주소에 get요청을 해준다. 이에 대한 결과는 .then을 통해 비동기적으로 확인 할 수 있다.
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=98e2a5c908f541c79f48db6c6ed77d61'
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
  //   </div>
  // );
  return <NewsList />;
};

export default App;
# 리액트를 이용한 뉴스 뷰어📰
<img src="public/images/newsviewer.gif" title="실행화면"> 

### 기술스택 
- React Hook
- JS(ES6+)
- HTML5
- PostCSS
<br/><br/>

### 프로젝트 구조 
```bash
├── App
│   └── NewsPage
│       ├── Categories
│       └── NewsList
│       
``` 
<br/>

### 구현한 방법과 이유에 대한 간략한 내용
React Hook과 PostCSS로 구현한 일정 관리 뉴스 뷰어 웹 애플리케이션입니다.
<br>
📖 첫 번째 구현 시 `리액트를 다루는 기술` 책을 보고 공부하며 구현하였습니다.   
📖 두 번째 구현 시에 다시 초기 상태로 만든 후 혼자 만들어 보았습니다.

### axios
axios는 현재 가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트이다. 이 라이브러리의 특징은 HTTP요청을 Promise기반으로 처리한다는 점이다. 

```
const onClick = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    console.log(response);
  });
};
```

### newsapi API
[newsAPI](https://newsapi.org/)

<br/>
<br/>

### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
api key를 보호하려고 env를 사용했는데 계속 undifined가 나왔다. 
설정후 yarn start로 다시 로그인 해야하는 것 

services에 따로 모아서 newsapi

artcles map으돌리는데  Cannot read properties of null (reading 'map')
artcles && 로 처리 

날씨 api를 사용해서 뭔가 하고싶었지만 UI적으로 별로였음.. ㅎ 기능뻄
newsapi 불러오는 로직 따로 뺏는데 이것떄메 좀 엉킴


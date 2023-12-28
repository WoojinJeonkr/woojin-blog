---
external: false
title : "Fetch Data in React"
date: 2022-11-02
---

## 1. Fetch API

- React에서 데이터를 가져오는 가장 기본적인 방법
- window.fetch에서 대부분의 최신 브라우저에 내장되어 있으며 , 및 기타 방법을 사용하여 GET과 POST와 같은 HTTP 요청을 만들 수 있다.

### 1-1. example

```ts
const getData = () => {
 return fetch('https://random-data-api.com/api/food/random_food')
  .then((response) => response.json())
  .then((data) => console.log(data));
};
```

## 2. async / await 구문

- 콜백을 제거하고 단순히 비동기식으로 해결된 데이터를 다시 가져올 수 있다.
- await 표현식은 약속을 반환하는 함수가 반환된 약속이 이행되거나 거부될 때까지 실행을 일시 중단하여 마치 동기적인 것처럼 동작하도록 한다.

### 2-1. example
  
```ts
async function getData() {
 try { 
  const response = await fetch('https://random-data-api.com/api/food/random_food');
  if (!response.ok) {
   throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
 } catch (error) {
  console.error(`Something went wrong: ${error}`);
 }
}
```

## 3. axios 라이브러리 사용하기

- Axios: HTTP 요청을 수행하는 데 사용되는 약속 기반 Javascript 라이브러리
- Fetch API와 매우 유사하게 작동하지만 주요 이점은 이미 결과를 JSON 객체로 반환하므로 변환할 필요가 없다

### 3-1. Example
  
```ts
import axios from "axios"
const getData = () => {
 return axios.get('https://random-data-api.com/api/food/random_food')
  .then((response) => console.log(response.data));
};
```

## 4. 이외의 방법

Custom hook을 사용하거나 React Query를 사용할 수 있다.

## 5. Reference

- [Axios Docs](https://axios-http.com/kr/docs/intro)
- [How to Fetch Data in React - 5 ways of getting data from API in React (with examples)](https://javascript.plainenglish.io/how-to-fetch-data-in-react-d59d6ee09aaf)

---
external: false
title : "Conditional Statement in React"
description : How to use Conditional Statement in React?
date: 2022-11-08
---

## 1. if ~ else in Component

```ts
function Component() {
  if ( true ) {
    return <p>참인 경우 출력</p>;
  } else {
    return null;
  }
} 
```

위의 코드 축약 버전

```ts
function Component() {
  if ( true ) {
    return <p>참인 경우 출력</p>;
  } 
  return null;
} 
```

## 2. Ternary Operator in JSX

```ts
function Component() {
  return (
    <div>
      {
        1 === 1
        ? <p>참인 경우 출력</p>
        : null
      }
    </div>
  )
} 
```

삼항 연산자(Tenary Operator)를 중첩해서 사용하는 경우 다음과 같이 작성해서 사용한다.

```ts
function Component() {
  return (
    <div>
      {
        1 === 1
        ? <p>참인 경우 출력</p>
        : ( 2 === 2 
            ? <p>안녕하세요</p> 
            : <p>안녕히가세요</p> 
          )
      }
    </div>
  )
} 
```

## 3. && 연산자 사용

```ts
function Component() {
  return (
    <div>
      { 1 === 1 && <p>참인 경우 출력</p> }
    </div>
  )
}
```

## 4. switch / case

```ts
function Component2(){
  var user = 'seller';
  if (user === 'seller'){
    return <h4>판매자 로그인</h4>
  } else if (user === 'customer'){
    return <h4>구매자 로그인</h4>
  } else {
    return <h4>그냥 로그인</h4>
  }
}
```

위의 코드를 switch case 문을 사용하면 다음과 같이 작성할 수 있다.

```ts
function Component2(){
  var user = 'seller';
  switch (user){
    case 'seller' :
      return <h4>판매자 로그인</h4>
    case 'customer' :
      return <h4>구매자 로그인</h4>
    default : 
      return <h4>그냥 로그인</h4>
  }
}
```

## 5. Object array 응용하기

```ts
function Component() {
  var now = 'info';
  return (
    <div>
      {
        { 
           info : <p>상품정보</p>,
           shipping : <p>배송관련</p>,
           refund : <p>환불약관</p>
        }[now]
      }
    </div>
  )
} 
```

위와 같이 작성해서 사용할 수도 있지만 다음과 같이 변수로 선언해서 사용할 수도 있다.

```ts
var TabUI = { 
  info : <p>상품정보</p>,
  shipping : <p>배송관련</p>,
  refund : <p>환불약관</p>
}

function Component() {
  var now = 'info';
  return (
    <div>
      { TabUI[now] }
    </div>
  )
} 
```

## 6. Reference

- [리액트에서 자주쓰는 if문 작성패턴 5개](https://codingapple.com/unit/react-if-else-patterns-enum-switch-case/)

---
external : false
title : "Javascript typeof"
tag : [BFE, Javascript]
date : 2024-03-26
---

## 1. typeof

typeof는 JavaScript에서 피연산자의 데이터 형식을 나타내는 연산자입니다. typeof 연산자를 사용하면 특정 값의 데이터 타입을 확인할 수 있습니다.

일반적으로 typeof는 다음과 같은 형태로 사용됩니다.

```js
typeof operand
```

여기서 operand는 데이터 타입을 확인하고자 하는 값입니다. 이 연산자는 다음과 같은 결과를 반환합니다.

- undefined: 피연산자가 정의되지 않은 경우
- boolean: 피연산자가 논리 값인 경우
- number: 피연산자가 숫자인 경우
- string: 피연산자가 문자열인 경우
- bigint: 피연산자가 BigInt 형식인 경우
- symbol: 피연산자가 심볼인 경우
- function: 피연산자가 함수인 경우
- object: 피연산자가 객체인 경우 (null을 제외한 모든 객체)
- null: 피연산자가 null인 경우

위 반환값의 예시를 들어보면 다음과 같습니다.

```js
typeof 42; // "number"
typeof 'hello'; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object"
typeof {}; // "object"
typeof []; // "object"
typeof function(){}; // "function"
```

## 2. Problem

문제 출처 : [JavaScript Quizzes > 105. typeof](https://bigfrontend.dev/quiz/typeof)

```js
const a = 'BFE.dev'
if (!typeof a === 'string') {
  console.log('string')
} else {
  console.log('not a string')
}
```

위 코드의 결과를 작성하시오.

## 3. Answer

```bash
'not a string'
```

## 4. Solve

먼저 a의 타입을 확인합니다.

```js
const a = 'BFE.dev'
typeof a // string
```

이제 typeof a가 'string'을 비교하고 결과값을 반대로 설정합니다.

```js
!(typeof a === 'string') // !(true) -> false
```

if 조건문 안 조건문이 false이므로 else문 안쪽의 console.log 구문이 실행되어 결과는 'not a string'으로 출력됩니다.

```js
const a = 'BFE.dev'
if (!typeof a === 'string') {
  console.log('string') // 실행되지 않음
} else {
  console.log('not a string') // 실행
}
```

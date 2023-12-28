---
external: false
title: "Array Initialization"
date: 2022-12-20
---

## 1. [] 사용하기

```ts
var A = [1, 2, 3];
var B = A;
A = [];
console.log(A); // []
```

## 2. 배열의 길이를 0으로 만들기

```ts
var A = [1, 2, 3];
A.length = 0;
console.log(A); // []
```

## 3. splice() 사용하기

```ts
var A = [1, 2, 3];
A.splice(0, A.length);
console.log(A); // []
```

## 4. pop() 사용하기

```ts
var A = [1, 2, 3];
while (A.length > 0){
    A.pop();
};
console.log(A); // []
```

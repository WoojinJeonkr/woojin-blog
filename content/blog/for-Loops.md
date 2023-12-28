---
external: false
title : "for Loops"
description : "Let's learn about for and for-in iteration"
date: 2022-10-05
---

## 1. for loop

조건에 의해 지정된 횟수만큼 코드 블록을 실행하는데 사용된다.

### 1-1. 형태

```ts
for (첫번째 표현식; 두번째 표현식; 세번째 표현식) {
    반복적으로 실행될 문장
}
```

### 1-2. 예시

```ts
for (let i = 0; i < 3; i++) {
  console.log ("Block statement execution no." + i);
}
```

### 1-3. 결과

```bash
Block statement execution no.0
Block statement execution no.1
Block statement execution no.2
```

## 2. for ... of loop

배열, 목록 또는 튜플 컬렉션의 요소를 반복하고 접근할 수 있다.
컬렉션(ex. array, list 또는 tuple)에서 요소를 반환하므로 위에 표시된 기존의 for 루프를 사용할 필요가 없으며 문자열 값에서 문자를 반환한다.

### 2-1-1. 예시 1

```ts
let arr = [10, 20, 30, 40];

for (var val of arr) {
  console.log(val);
}
```

### 2-1-2. 결과 1

```bash
10
20
30
40
```

### 2-2-1. 예시 2

```ts
let str = "Hello World";

for (var char of str) {
  console.log(char);
}
```

### 2-2-2. 결과 2

```bash
H
e
l
l
o
 
W
o
r
l
d
```

## 3. for ... in loop

리스트나 컬렉션을 반복하고 각 반복에서 인덱스를 반환한다.
array, list 또는 tuple과 함께 사용할 수 있다.

### 3-1-1. 예시 1
  
```ts
let arr = [10, 20, 30, 40];

for (var index in arr) {
  console.log(index);
  console.log(arr[index]);
}
```

### 3-1-2. 결과 1

```bash
0
10
1
20
2
30
3
40
```

위의 예시 1의 for 부분에서 괄호 안에 var 대신 let을 사용할 수도 있다.
이 경우 let 뒤에 오는 변수를 for ... in 반복문 외부에서 사용할 수 없다.

### 3-2-1. 예시 2

```ts
let arr = [10, 20, 30, 40];

for (let index2 in arr) {
  console.log(index2);
}
console.log(index2);
```

### 3-2-2. 결과 2

```bash
0
1
2
3
```

위와 같이 출력되고 'Compile Error: cannot find index2'라는 오류 메세지가 출력된다.

## 4. 참고 자료

- [TypeScript - for Loops](https://www.tutorialsteacher.com/typescript/for-loop)
- [pythontutor.com - Write code in JavaScript ES6](https://pythontutor.com/visualize.html#mode=edit)

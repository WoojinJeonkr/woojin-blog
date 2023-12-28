---
external: false
title : "Type Casting"
date: 2022-11-27
---

## 1. 타입 형변환

하나의 타입을 다른 타입으로 바꾸는 것을 말한다.
라이브러리에서 잘못된 유형을 제공하는 경우와 같이 변수의 유형을 재정의하는 경우에 사용한다.

### 1-1. as

- 주어진 변수의 유형을 직접 변경하는 키워드
- 캐스팅은 실제로 변수 내의 데이터 유형을 변경하지 않는다

```ts
const value: unknown = "10.00423";
const str = value as number;
console.log(str * 10);  // 100.0423
```

### 1-2. <>

- as로 캐스팅할 때와 동일하게 작동한다.
- TSX에서 작동하지 않는다.

```ts
let x: unknown = 'hello';
console.log((<string>x).length); // 5
```

### 1-3. Force Casting

TypeScript에서 캐스팅할 때 발생할 수 있는 유형 오류를 재정의하려면 먼저 unknown으로 캐스팅한 다음 대상 유형으로 캐스팅하게 되는데 이를 강제 형변환(Force Casting)이라고 한다.

```ts
let x = 'hello';
console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined
```

## 2. Reference

- [TypeScript Casting](https://www.w3schools.com/typescript/typescript_casting.php)

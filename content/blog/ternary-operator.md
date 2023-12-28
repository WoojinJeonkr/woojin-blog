---
external: false
title: "ternary operator"
date: 2022-09-14
---

## 1. 삼항 연산자란?

연산 대상의 개수에 따라 연산자를 분리하면 단항 연산자, 이항 연산자, 삼항 연산자로 분리된다.

- 단항 연산자 : 부호(+, -), not 등
- 이항 연산자 : +, -, *, / 등 대부분의 연산자
- 형태 : **참인 경우의 값** if **조건** else **거짓인 경우의 값**

다음과 같은 조건문이 있다고 가정해보자

```python
if score > 80:
    print("Good")
else:
    print("BAD")
```

을 삼항 연산자로 작성한다면

```python
print("Good") if score > 80 else print("BAD')
```

로 작성할 수 있다.

## 2. 문제

[문제 확인하기](https://www.acmicpc.net/problem/2753){: target="_blank"}

## 3. 풀이

```python
year = int(input())
print('1') if ((year%4 == 0) and (year%100 != 0)) or (year%400 == 0) else print('0')
```

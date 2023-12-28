---
external: false
title: "Database Normalization 2"
date: 2023-10-17
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/database-normalization-123nf/problem?isFullScreen=true)

## 2. 정답

```textile
3
```

## 3. 풀이

Zip Code와 City 간에 다대일 매핑이 있다는 것을 고려할 때, 데이터베이스가 3NF(normal form)가 아닌 상태라는 결론을 내릴 수 있다.
3NF는 이러한 종류의 종속성을 허용하지 않으므로 정답은 x의 값은 3이다.

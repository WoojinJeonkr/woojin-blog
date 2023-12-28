---
external: false
title: "Database Normalization 9"
date: 2023-10-29
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/database-normalization-9/problem?isFullScreen=true)

## 2. 정답

```textile
2
```

## 3. 풀이

문제에서 주어진 릴레이션은 R(a, b, c, d, e)입니다.
우리는 주어진 종속성들 중에서 어떤 것이 다른 속성들을 유일하게 식별하지 못하는지 찾아야 합니다.

### 3-1. 1. a, c → b, d, e

이 종속성은 a와 c의 값에 따라 b, d, e를 유일하게 식별합니다. 그러므로 이것은 후보 키가 될 수 있습니다.

### 3-2. a, d → b

이 종속성은 a와 d의 값에 따라 b를 유일하게 식별하나 c와 e를 고려하지 않기 때문에, a와 d가 같더라도 c와 e의 값에 따라 b가 다를 수 있어 후보 키가 될 수 없습니다.

### 3-3. a,c,e→b,d

이 종속성은 a, c, e의 조합으로 b, d를 식별할 수 있습니다.

## 4. 정답

따라서 정답은 2번이 됩니다.

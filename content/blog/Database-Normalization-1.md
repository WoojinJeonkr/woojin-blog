---
external: false
title: "Database Normalization 1"
date: 2023-10-16
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/database-normalization-1-1nf/problem?isFullScreen=true)

## 2. 정답

```textile
3
5
2
```

## 3. 풀이

먼저 주어진 비정규화된 테이블은 다음과 같습니다:

| Product-ID | Colors       | Price |
|------------|--------------|-------|
| 1          | Red,Green    | 15.0  |
| 2          | Blue         | 18.0  |
| 3          | Yellow,Pink  | 2.5   |

이제 이 테이블을 1NF로 나누어 보겠습니다.

Colors 열을 분할하여 여러 행으로 만들면 다음과 같은 결과를 얻을 수 있습니다:

Transformed Table 1 (X rows):

| Product-ID | Colors | Price |
|------------|--------|-------|
| 1          | Red    | 15.0  |
| 1          | Green  | 15.0  |
| 2          | Blue   | 18.0  |
| 3          | Yellow | 2.5   |
| 3          | Pink   | 2.5   |

Transformed Table 2 (Y rows):

| Product-ID | Colors | Price |
|------------|--------|-------|
| 1          | Red    | 15.0  |
| 1          | Green  | 15.0  |
| 3          | Yellow | 2.5   |
| 3          | Pink   | 2.5   |

첫 번째 테이블은 5개의 행(X=5)을, 두 번째 테이블은 4개의 행(Y=4)을 가지고 있습니다. 또한 각 테이블은 3개의 열(Z=3)을 가지고 있습니다.

여기서 Colors 열을 나눌 때, 테이블 1에서는 각 제품당 하나의 색상만을 가지고 있으므로 행의 수가 줄어들게 됩니다. 결과적으로 테이블 1은 3개의 행(X=3)을 가지게 됩니다. 이에 반해 테이블 2에서는 각 제품이 여러 색상을 가질 수 있으므로 행의 수가 유지되어 5개의 행(Y=5)이 됩니다. 테이블 1과 테이블 2는 각각 2개의 열(Colors와 Price)을 가지고 있으므로 Z=2가 됩니다.

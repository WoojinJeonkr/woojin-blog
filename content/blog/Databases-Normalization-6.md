---
external: false
title: "Database Normalization 6"
date: 2023-10-28
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/database-normalization-6/problem?isFullScreen=true)

## 2. 정답

```textile
2
```

## 3. 풀이

먼저, 주어진 관계와 결정자에 대해 정리해보겠습니다.

주어진 관계는 다음과 같습니다.

1. customer(name, addr, memberno)
2. movie(description, director, serialno)
3. borrow(memberno, date, serialno)

주어진 결정자는 다음과 같습니다.

1. description -> director, serialno
2. serialno -> description
3. serialno -> director
4. name, addr -> memberno
5. memberno -> name, addr
6. serialno, date -> memberno

이제 각 정규형을 만족하는지 확인해보겠습니다.
1NF는 모든 속성이 원자적인 값만을 가지고 있어야 합니다.
위에서 알 수 있듯이 주어진 관계는 이미 1NF를 만족합니다.

다음으로, 2NF는 모든 비주요 속성이 주요 속성에 완전 함수적 종속이어야 합니다. 주어진 결정자를 고려해보면

1. customer 관계에서 (name, addr)은 memberno에 함수적 종속되어 있습니다.
2. movie 관계에서 (serialno)는 (description, director)에 함수적 종속되어 있습니다.
3. borrow 관계에서 (memberno, DATE, SERIALNO)는 memberno에 함수적 종속되어 있습니다.

그러므로 2NF를 만족하는 것을 알 수 있습니다.

다음으로 3NF를 만족하는지 확인해보겠습니다.
3NF는 모든 속성이 기본키에 대해서 이행적 종속을 갖지 않아야 합니다. 주어진 관계에서 (name, addr)이 memberno에 함수적 종속이므로, (name, addr) -> (description, director)와 같은 이행적 종속이 존재합니다.

따라서, 주어진 관계는 2NF를 만족하지만 3NF를 만족하지 않으므로, 정답이 2가 됩니다.

---
external: false
title: "DECODE"
date: 2023-11-17
---

## 1. DECODE

DECODE는 Oracle 데이터베이스에서 사용되는 조건부 표현식 함수입니다. 이 함수는 주로 선택적인 값을 반환하거나 특정 조건에 따라 다른 결과를 생성하는 데 사용됩니다.

## 2. 구문

```sql
DECODE(expression, search1, result1, search2, result2, ..., default)
```

- expression: 비교할 값 또는 표현식입니다.
- search1, search2, ...: 비교 대상 값입니다.
- result1, result2, ...: 대응하는 search 값과 일치할 때 반환할 결과입니다.
- default: 모든 search 값이 일치하지 않을 때 반환할 기본값입니다.

## 3. DECODE 함수 동작 방식

1. expression이 search1과 일치하면 result1을 반환합니다.
2. expression이 search2와 일치하면 result2를 반환합니다.
3. 계속해서 이어지며, 일치하는 첫 번째 search 값을 찾으면 해당하는 결과를 반환합니다.
4. 일치하는 search 값이 없으면 default 값을 반환합니다.

## 4. 예제

```sql
SELECT
  DECODE(grade, 1, 'Excellent', 2, 'Good', 3, 'Satisfactory', 'Fail') AS result
FROM
  student_grades;
```

위와 같은 SQL 구문의 경우 grade 값이 1이면 'Excellent', 2이면 'Good', 3이면 'Satisfactory', 그 외의 경우에는 'Fail'을 반환합니다.

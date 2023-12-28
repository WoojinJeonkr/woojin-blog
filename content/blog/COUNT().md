---
external: false
title: "COUNT()"
date: 2023-11-15
---

## 1. COUNT()

COUNT()는 SQL에서 사용되는 집계 함수 중 하나로, 특정 조건을 만족하는 행의 수를 계산하는 데 사용됩니다.

## 2. 구문

```sql
COUNT(expression)
```

여기서 expression은 COUNT 함수가 세고자 하는 행의 조건이나 열을 나타냅니다. 주로 * (모든 열)이나 특정 열의 이름, 혹은 조건을 사용할 수 있습니다.

## 3. 예시

```sql
-- 모든 행의 수를 세는 경우
SELECT COUNT(*) FROM employees;

-- 특정 열의 값을 가지는 행의 수를 세는 경우
SELECT COUNT(employee_id) FROM employees;

-- 특정 조건을 만족하는 행의 수를 세는 경우
SELECT COUNT(*) FROM employees WHERE salary > 60000;
```

## 4. COUNT()와 NULL

COUNT()의 괄호 안 표현식에 어떤 것이 오느냐에 따라 NULL을 카운트할 지 안 할 지가 구분됩니다.

1. COUNT(*): 전체 행 수를 세며, NULL 여부와 관계 없이 모든 행을 카운트합니다.
2. COUNT(컬럼): 해당 컬럼의 NULL 값을 제외하고 비-NULL 값만을 카운트합니다.
3. COUNT(복잡한 표현식): 해당 표현식의 결과가 NULL이 아닌 행만을 카운트합니다.
4. COUNT(1): 1은 상수이므로 NULL이 아니며, 전체 행을 카운트합니다. NULL을 제외하는 것이 아니라 전체 행을 세게 됩니다.

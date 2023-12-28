---
external: false
title: "NVL & COALESCE"
date: 2023-11-17
---

## 1. NVL

### 1-1. 정의 및 구문

NVL은 Oracle 데이터베이스에서 사용되는 함수 중 하나로, 특정 값이 NULL인 경우에 대체 값을 반환하는 데 사용됩니다.

```sql
NVL(expr1, expr2)
```

여기서 expr1은 평가할 표현식이고, expr2는 expr1이 NULL일 경우 대체할 값입니다. 만약 expr1이 NULL이 아니라면, 그 값을 그대로 반환합니다.

### 1-2. 예제

```sql
SELECT employee_name, NVL(salary, 0) AS adjusted_salary
FROM employees;
```

위의 쿼리에서 salary가 NULL인 경우에는 adjusted_salary가 0으로 설정됩니다.

## 2. COALESCE

### 2-1. 정의 및 구문

COALESCE 함수는 여러 개의 인자 중 첫 번째로 NULL이 아닌 값을 반환하는 함수입니다.

```sql
COALESCE(expr1, expr2, ..., exprn)
```

여기서 expr1부터 exprn까지는 평가할 여러 표현식이며, COALESCE 함수는 이들 중 첫 번째로 NULL이 아닌 값을 반환합니다.
즉, 왼쪽에서 오른쪽으로 순서대로 평가하다가 처음으로 NULL이 아닌 값을 만나면 그 값을 결과로 반환합니다.

### 2-2. 예제

테이블 SQLD_30_22가 다음과 같을 때 아래의 SQL에 대한 결과가 어떤지 보겠습니다.

[SQLD_30_22]

| COL1 | COL2 |
|------|------|
| 100  | 100  |
| NULL | 60   |
| NULL | NULL |

```sql
SELECT COALESCE(COL1, COL2*50, 50) FROM SQLD_30_22;
```

1. 첫 번째 행: COALESCE(100, 100*50, 50) → 100 (첫 번째 값이 NULL이 아니므로 나머지 값들은 무시됩니다.)
2. 두 번째 행: COALESCE(NULL, 60*50, 50) → 3000 (두 번째 값이 NULL이므로 두 번째 값 대신 세 번째 값인 50이 선택됩니다.)
3. 세 번째 행: COALESCE(NULL, NULL*50, 50) → 50 (두 번째 값과 세 번째 값이 모두 NULL이므로 세 번째 값인 50이 선택됩니다.)

따라서 쿼리의 결과는 다음과 같이 됩니다.

| COALESCE(COL1, COL2*50, 50) |
|-----------------------------|
| 100                         |
| 3000                        |
| 50                          |

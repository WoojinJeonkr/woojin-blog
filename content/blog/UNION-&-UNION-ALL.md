---
external: false
title: "UNION & UNION ALL"
date: 2023-11-17
---

## 1. UNION과 UNION ALL

UNION 및 UNION ALL은 SQL에서 두 개 이상의 SELECT 문의 결과를 결합하는데 사용되는 연산자입니다.

## 2. 두 연산자의 차이

- UNION: 중복된 행을 제거하여 각 SELECT 문의 결과에서 중복된 행이 있는 경우 한 번만 표시됩니다.
- UNION ALL: 중복된 행을 제거하지 않아 각 SELECT 문의 결과에서 중복된 행이 그대로 표시됩니다.

## 3. 예제

예를 들어 다음과 같은 두 테이블이 있다고 가정해봅시다.

Table: employees1

| emp_id | emp_name |
|--------|----------|
| 1      | John     |
| 2      | Alice    |
| 3      | Bob      |

Table: employees2

| emp_id | emp_name |
|--------|----------|
| 3      | Bob      |
| 4      | Eve      |
| 5      | Charlie  |

UNION으로 결합하는 경우 구문은 다음과 같이 작성할 수 있습니다.

```sql
SELECT emp_id, emp_name FROM employees1
UNION
SELECT emp_id, emp_name FROM employees2;
```

이 경우 emp_id가 3인 Bob이라는 데이터가 중복되어 결과가 다음과 같이 출력됩니다.

| emp_id | emp_name |
|--------|----------|
| 1      | John     |
| 2      | Alice    |
| 3      | Bob      |
| 4      | Eve      |
| 5      | Charlie  |

이제 UNION ALL로 결합하는 경우를 살펴보겠습니다.

```sql
SELECT emp_id, emp_name FROM employees1
UNION ALL
SELECT emp_id, emp_name FROM employees2;
```

앞서 설명한 바와 같이 emp_id가 3인 Bob이라는 데이터가 중복되지만 UNION ALL의 경우 중복되는 데이터를 그대로 표시하므로 다음과 같은 결과를 출력합니다.

| emp_id | emp_name |
|--------|----------|
| 1      | John     |
| 2      | Alice    |
| 3      | Bob      |
| 3      | Bob      |
| 4      | Eve      |
| 5      | Charlie  |

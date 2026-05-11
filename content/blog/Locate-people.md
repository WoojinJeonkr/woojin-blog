---
external : false
title : "Locate people"
tag : [Codechef, SQL]
date : 2026-05-11
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/sql-case-studies-topic-wise/SQLBP01/problems/SQLPBP15)에서 확인하실 수 있습니다.

## 2. Answer

```sql
SELECT department_name, location
FROM departments
WHERE location LIKE 'S%';
```

## 3. Result

```text
┌──────────────────────────┬───────────────┐
│     department_name      │   location    │
├──────────────────────────┼───────────────┤
│ Research and Development │ San Francisco │
│ IT Support               │ Seattle       │
│ Product Management       │ San Francisco │
└──────────────────────────┴───────────────┘
```

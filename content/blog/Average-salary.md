---
external : false
title : "Average salary"
tag : [Codechef, SQL]
date : 2026-05-10
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/sql-case-studies-topic-wise/SQLBP01/problems/SQLPBP14)에서 확인하실 수 있습니다.

## 2. Answer

```sql
SELECT AVG(salary) AS avg_salary
FROM Works;
```

## 3. Result

```text
┌────────────┐
│ avg_salary │
├────────────┤
│ 62600.155  │
└────────────┘
```

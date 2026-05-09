---
external : false
title : "High price of products"
tag : [Codechef, SQL]
date : 2026-05-09
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/sql-case-studies-topic-wise/SQLBP01/problems/SQLPBP12)에서 확인하실 수 있습니다.

## 2. Answer

```sql
SELECT product_name, category
FROM Products
WHERE price > 100.00;
```

## 3. Output

```text
┌───────────────┬─────────────┐
│ product_name  │  category   │
├───────────────┼─────────────┤
│ Laptop        │ Electronics │
│ Desk Chair    │ Furniture   │
│ Smartphone    │ Electronics │
│ Standing Desk │ Furniture   │
│ Tablet        │ Electronics │
└───────────────┴─────────────┘
```

## 4. Score

|       Sub-Task      | Task # |    Result (time)   |
|:-------------------:|:------:|:------------------:|
|          1          |    0   |   Correct (0.00)   |
| Subtask Score: 100% |        |  Result - Correct  |
|                     |        | Total Score = 100% |

---
external: false
title: "Top Earners"
date: 2023-08-21
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/earnings-of-employees/problem?isFullScreen=true&h_r=next-challenge&h_v=zen)

## 2. 정답 코드 (MySQL)

```sql
SELECT (MONTHS*SALARY) AS EARN, COUNT(*)
FROM EMPLOYEE
GROUP BY EARN
ORDER BY EARN DESC LIMIT 1;
```

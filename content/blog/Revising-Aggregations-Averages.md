---
external: false
title: "Revising Aggregations Averages"
date: 2023-08-20
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/revising-aggregations-the-average-function/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen)

## 2. 정답 코드 (MySQL)

```sql
SELECT SUM(POPULATION)/COUNT(NAME) FROM CITY
WHERE DISTRICT = 'California';
```

## 3. 다른 정답 코드 (MySQL)

```sql
SELECT AVG(POPULATION) FROM CITY
WHERE DISTRICT = 'California';
```

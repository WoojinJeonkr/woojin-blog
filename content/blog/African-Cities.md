---
external: false
title: "African Cities"
date: 2023-09-01
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/african-cities/problem?isFullScreen=true)

## 2. 정답 코드

```sql
SELECT CITY.NAME FROM CITY, COUNTRY
WHERE CITY.COUNTRYCODE = COUNTRY.CODE AND COUNTRY.CONTINENT = "Africa";
```

---
external: false
title: "Weather Observation Station 13"
date: 2023-08-26
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/weather-observation-station-13/problem?isFullScreen=true&h_r=next-challenge&h_v=zen)

## 2. 정답 코드 (MySQL)

```sql
SELECT TRUNCATE(SUM(LAT_N), 4) FROM STATION
WHERE LAT_N > 38.7880 AND LAT_N < 137.2345;
```

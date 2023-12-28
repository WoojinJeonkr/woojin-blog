---
external: false
title: "Weather Observation Station 17"
date: 2023-09-01
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/weather-observation-station-17/problem?isFullScreen=true)

## 2. 정답 코드 (MySQL)

```sql
SELECT ROUND(LONG_W, 4) FROM STATION
WHERE LAT_N > 38.7780
ORDER BY LAT_N LIMIT 1;
```

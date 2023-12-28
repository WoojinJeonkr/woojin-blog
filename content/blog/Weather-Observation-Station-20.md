---
external: false
title: "Weather Observation Station 20"
date: 2023-09-03
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/weather-observation-station-20/problem?isFullScreen=true)

## 2. 정답 코드 (MySQL)

1. STATION 테이블에서 LAT_N 열의 값을 추출합니다.
2. 추출한 값들을 LAT_N 열을 기준으로 오름차순으로 정렬합니다.
3. PERCENT_RANK() 함수를 사용하여 각 행의 백분위 순위를 계산합니다.
4. PERCENT 열이 0.5인 행을 선택합니다.

```sql
SELECT ROUND(LAT_N, 4)
FROM (SELECT LAT_N, PERCENT_RANK() OVER (ORDER BY LAT_N ASC) PERCENT
      FROM STATION) MEDIAN_LAT_N
WHERE PERCENT = 0.5;
```

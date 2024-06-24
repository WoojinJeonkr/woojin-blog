---
external : false
title : "Subway line avg station dist"
tag : [Programmers, SQL]
date : 2024-06-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/284531)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 노선별 데이터를 조회합니다.
SELECT ROUTE,

-- 총 거리를 계산하여 'TOTAL_DISTANCE' 별칭으로 지정합니다.
    CONCAT(ROUND(SUM(D_BETWEEN_DIST), 1),'km') AS TOTAL_DISTANCE, 

-- 평균 거리를 계산하여 'AVERAGE_DISTANCE' 별칭으로 지정합니다.
    CONCAT(ROUND(AVG(D_BETWEEN_DIST), 2), 'km') AS AVERAGE_DISTANCE
FROM SUBWAY_DISTANCE

-- 노선별로 그룹화합니다.
GROUP BY ROUTE

-- 총 거리 기준으로 내림차순 정렬합니다.
ORDER BY ROUND(SUM(D_BETWEEN_DIST), 1) DESC;
```

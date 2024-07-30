---
external : false
title : "Show top restaurants by favorites"
tag : [Programmers, SQL]
date : 2024-07-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131123)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 식당 정보와 즐겨찾기 수가 가장 많은 식당을 가져오는 쿼리
SELECT ri.FOOD_TYPE, ri.REST_ID, ri.REST_NAME, ri.FAVORITES
FROM REST_INFO ri
-- 서브쿼리: FOOD_TYPE별로 가장 높은 FAVORITES를 찾습니다.
JOIN (
    SELECT FOOD_TYPE, MAX(FAVORITES) AS MAX_FAVORITES
    FROM REST_INFO
    GROUP BY FOOD_TYPE
) sub
-- 서브쿼리의 결과와 원본 테이블을 FOOD_TYPE과 MAX_FAVORITES로 조인합니다.
ON ri.FOOD_TYPE = sub.FOOD_TYPE AND ri.FAVORITES = sub.MAX_FAVORITES
-- FOOD_TYPE을 내림차순으로 정렬합니다.
ORDER BY ri.FOOD_TYPE DESC;
```

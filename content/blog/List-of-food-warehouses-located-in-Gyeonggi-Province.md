---
external : false
title : "List of food warehouses located in Gyeonggi Province"
tag : [Programmers, SQL]
date : 2024-05-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131114)에서 확인하실 수 있습니다.

## 2. Solve

```sql
-- 'FOOD_WAREHOUSE' 테이블에서 'WAREHOUSE_ID', 'WAREHOUSE_NAME', 'ADDRESS', 'FREEZER_YN' 컬럼을 선택합니다
-- 'FREEZER_YN' 컬럼이 null 값을 가지고 있다면 N으로 표시합니다
SELECT WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, IFNULL(FREEZER_YN, 'N') AS FREEZER_YN FROM FOOD_WAREHOUSE
-- 'ADDRESS' 컬럼 값에 '경기'를 포함하는 행만을 선택합니다
WHERE ADDRESS LIKE '%경기%'
-- 'WAREHOUSE_ID'를 기준으로 오름차순으로 정렬합니다
ORDER BY WAREHOUSE_ID;
```

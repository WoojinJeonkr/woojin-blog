---
external : false
title : "Display order status by category"
tag : [Programmers, SQL]
date : 2024-06-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131113)에서 확인하실 수 있습니다.

## 2. Answer

```sql
--  5월 1일을 기준으로 주문 ID, 제품 ID, 출고일자, 출고여부를 조회하는 SQL문
SELECT ORDER_ID, PRODUCT_ID, DATE_FORMAT(OUT_DATE,'%Y-%m-%d') 'OUT_DATE',
  -- 출고여부는 5월 1일까지 출고완료로 이 후 날짜는 출고 대기로 미정이면 출고미정으로 출력
  CASE WHEN OUT_DATE IS NULL THEN '출고미정'
        WHEN OUT_DATE >= '2022-05-01' THEN '출고완료'
        ELSE '출고대기' END AS '출고여부'
FROM FOOD_ORDER -- FOOD_ORDER 테이블에서
ORDER BY ORDER_ID ASC -- 주문 ID를 기준으로 오름차순 정렬
```

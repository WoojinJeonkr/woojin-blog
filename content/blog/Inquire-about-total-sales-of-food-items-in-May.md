---
external : false
title : "Inquire about total sales of food items in May"
tag : [Programmers, SQL]
date : 2024-06-08
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131117)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- FOOD_ORDER 테이블과 FOOD_PRODUCT 테이블을 조인하여 각 제품의 총 매출을 계산합니다.
SELECT P.PRODUCT_ID, P.PRODUCT_NAME, SUM(P.PRICE * O.AMOUNT) AS TOTAL_SALES
-- FOOD_ORDER 테이블(O)과 FOOD_PRODUCT 테이블(P)을 조인합니다.
FROM FOOD_ORDER O JOIN FOOD_PRODUCT P
-- 주문 테이블의 제품 ID와 제품 테이블의 제품 ID를 기준으로 조인합니다.
ON O.PRODUCT_ID = P.PRODUCT_ID
-- 주문이 발생한 날짜가 2022년 5월인 경우에 대해서만 쿼리를 실행합니다.
WHERE O.PRODUCE_DATE BETWEEN '2022-05-01' AND '2022-05-31'
-- 각 제품별로 그룹화하여 총 매출을 계산합니다.
GROUP BY O.PRODUCT_ID
-- 총 매출을 내림차순으로 정렬하고, 매출이 같은 경우에는 제품 ID를 기준으로 오름차순으로 정렬합니다.
ORDER BY TOTAL_SALES DESC, P.PRODUCT_ID;
```

---
external : false
title : "Calculate offline sales by product"
tag : [Programmers, SQL]
date : 2024-05-31
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131533)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 제품 코드와 해당 제품의 총 매출을 계산합니다
SELECT P.PRODUCT_CODE AS PRODUCT_CODE, SUM(P.PRICE * O.SALES_AMOUNT) AS SALES
-- 제품 테이블과 오프라인 판매 테이블을 조인하여 제품 코드와 판매액을 연결합니다
FROM PRODUCT P JOIN OFFLINE_SALE O
ON P.PRODUCT_ID = O.PRODUCT_ID
-- 제품 코드로 그룹화합니다
GROUP BY P.PRODUCT_CODE
-- 매출 내림차순으로 정렬하되, 매출이 동일한 경우 제품 코드로 오름차순 정렬합니다
ORDER BY SALES DESC, PRODUCT_CODE;
```

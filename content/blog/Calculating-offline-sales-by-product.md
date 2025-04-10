---
external : false
title : "Calculating offline sales by product"
tag : [Programmers, SQL]
date : 2025-04-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131533)에서 확인하실 수 있습니다.

## 2. Answer

```sql

SELECT P.PRODUCT_CODE AS PRODUCT_CODE, 
    SUM(P.PRICE * O.SALES_AMOUNT) AS SALES -- 매출 계산 (가격 * 판매량 합계)
FROM PRODUCT P
JOIN OFFLINE_SALE O
-- PRODUCT 테이블과 OFFLINE_SALE 테이블을 PRODUCT_ID로 조인
ON P.PRODUCT_ID = O.PRODUCT_ID
 -- PRODUCT_CODE별 그룹화
GROUP BY P.PRODUCT_CODE
-- 매출 내림차순, 코드 오름차순 정렬
ORDER BY SALES DESC, PRODUCT_CODE;
```

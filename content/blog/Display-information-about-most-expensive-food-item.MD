---
external : false
title : "Display information about most expensive food item"
tag : [Programmers, SQL]
date : 2024-06-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131115)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- FOOD PRODUCT 테이블에서 가장 비싼 가격인 상품의 정보 가져오기
SELECT  PRODUCT_ID, PRODUCT_NAME, PRODUCT_CD, CATEGORY, PRICE
FROM    FOOD_PRODUCT
WHERE   PRICE = (SELECT MAX(PRICE) FROM FOOD_PRODUCT);
```

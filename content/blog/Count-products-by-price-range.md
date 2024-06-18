---
external : false
title : "Count products by price range"
tag : [Programmers, SQL]
date : 2024-06-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131530)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- PRICE를 10000으로 나눈 후 내림하여 PRICE_GROUP을 계산합니다
SELECT FLOOR(PRICE / 10000) * 10000 AS PRICE_GROUP,
       -- 각 PRICE_GROUP 별 제품의 개수를 COUNT_PRODUCTS로 세어줍니다
       COUNT(*) AS COUNT_PRODUCTS
FROM PRODUCT
-- PRICE_GROUP 별로 그룹화합니다
GROUP BY FLOOR(PRICE / 10000)
-- PRICE_GROUP을 오름차순으로 정렬합니다
ORDER BY PRICE_GROUP;
```

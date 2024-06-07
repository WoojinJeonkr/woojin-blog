---
external : false
title : "Calculate total price of items meeting conditions"
tag : [Programmers, SQL]
date : 2024-06-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/273709)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- ITEM_INFO 테이블에서 희귀도가 'LEGEND'인 아이템들의 가격의 총합을 구한다
SELECT SUM(PRICE) AS TOTAL_PRICE -- PRICE의 총합을 구하고 컬럼명을 TOTAL_PRICE라고 정의 (3)
FROM ITEM_INFO -- ITEM_INFO 테이블에서 (1)
WHERE RARITY = 'LEGEND'; -- RARITY가 LEGEND인 (2)
```

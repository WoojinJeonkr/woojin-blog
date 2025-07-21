---
external : false
title : "Shopping carts containing milk and yogurt"
tag : [Programmers, SQL]
date : 2025-07-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/62284)에서 확인하실 수 있습니다.

## 2. Solution

장바구니에 Milk와 Yogurt가 모두 담긴 경우를 찾기 위해, 먼저 상품 이름이 Milk 또는 Yogurt인 항목들만 추려야 합니다.

그런 다음, 각 장바구니(CART_ID)별로 이 상품들이 몇 가지 종류로 들어 있는지 확인해야 합니다.

만약 하나의 장바구니에 Milk와 Yogurt 두 가지 상품이 모두 포함되어 있다면, 해당 장바구니에는 서로 다른 두 개의 상품명이 존재하게 됩니다.

이를 활용하여 장바구니 ID별로 그룹을 묶은 뒤, 그룹 내 서로 다른 상품명이 2개인 경우만 골라낼 수 있습니다. 마지막으로, 결과는 장바구니 ID 기준으로 정렬하여 출력해야 합니다.

## 3. Answer

```sql
SELECT CART_ID
FROM CART_PRODUCTS
WHERE NAME IN ('Milk', 'Yogurt')
GROUP BY CART_ID
HAVING COUNT(DISTINCT NAME) = 2
ORDER BY CART_ID;
```

---
external : false
title : "Getting number of products by category"
tag : [Programmers, SQL]
date : 2024-07-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131529)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 상품 코드 분류 및 개수 집계

SELECT
  -- 상품 코드에서 처음 두 글자를 추출하여 카테고리 분류
  SUBSTRING(PRODUCT_CODE, 1, 2) AS CATEGORY,
  -- 각 카테고리에 속한 상품 개수 세기
  COUNT(PRODUCT_ID) AS PRODUCTS
FROM
  -- PRODUCT 테이블에서 데이터 가져오기
  PRODUCT
GROUP BY
  -- 동일한 카테고리 (CATEGORY)를 가진 데이터끼리 묶음
  CATEGORY
ORDER BY
  -- 카테고리 코드 순서대로 정렬 (오름차순)
  CATEGORY;
```

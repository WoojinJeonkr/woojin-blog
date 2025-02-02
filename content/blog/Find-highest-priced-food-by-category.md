---
external : false
title : "Find highest priced food by category"
tag : [Programmers, SQL]
date : 2025-02-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131116)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간(문제 확인 ~ 첫 쿼리 작성 시점): 15분
2. 해결 시간(첫 쿼리 시도 ~ 문제 정답 확인): 45분
3. 코드 시도 횟수: 5회

## 3. Problem solving process

주어진 문제는 식품 정보 테이블에서 특정 카테고리별 최고가 제품을 찾는 것입니다. 전체 테이블에서 과자, 국, 김치, 식용유 카테고리의 제품들을 필터링하고, 각 카테고리에서 가장 높은 가격의 제품을 찾아야 합니다.

카테고리별로 데이터를 그룹화하고 그룹 내 최대 가격을 찾기 위해 GROUP BY를 사용하며, 특정 카테고리 필터링은 그룹화 이후에 적용되어야 하므로 HAVING 절을 사용합니다. 최종 결과는 가격 기준 내림차순으로 정렬되어야 하며, GROUP_CONCAT과 SUBSTRING_INDEX를 조합하여 각 그룹의 최대 가격에 해당하는 제품명을 함께 표시할 수 있습니다.

이때 MySQL의 GROUP BY 규칙에 따라 SELECT 절의 모든 컬럼은 그룹화되거나 집계함수가 적용되어야 하며, 정렬은 집계된 MAX_PRICE를 기준으로 해야 합니다.

## 4. Answer

```sql
-- 코드 실행 순서: FROM → GROUP BY → HAVING → SELECT → ORDER BY

-- 1. FROM: FOOD_PRODUCT 테이블에서 데이터를 가져옴
SELECT 
  CATEGORY,                   -- 3-1. 카테고리 선택
  MAX(PRICE) AS MAX_PRICE,   -- 3-2. 각 그룹의 최대 가격을 구함
  -- 3-3. 각 그룹 내에서 가격이 높은 순으로 정렬된 제품명 중 첫 번째 값만 선택
  SUBSTRING_INDEX(
    GROUP_CONCAT(
      PRODUCT_NAME ORDER BY PRICE DESC
    ), 
    ',', 
    1
  ) AS PRODUCT_NAME
FROM FOOD_PRODUCT

-- 2. 카테고리별로 그룹화
GROUP BY CATEGORY

-- 3. 그룹화된 결과에서 특정 카테고리만 필터링
HAVING CATEGORY IN ('과자', '국', '김치', '식용유')

-- 4. 최대 가격 기준으로 내림차순 정렬
ORDER BY MAX_PRICE DESC
```

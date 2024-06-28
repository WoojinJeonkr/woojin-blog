---
external : false
title : "Ice cream total order quantity by ingredient"
tag : [Programmers, SQL]
date : 2024-06-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/133026)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 상반기 아이스크림 주문 데이터 분석

-- 주문 데이터 테이블(FIRST_HALF)에서 FLAVOR 정보 추출
SELECT B.INGREDIENT_TYPE AS INGREDIENT_TYPE,  -- B 테이블의 INGREDIENT_TYPE을 'INGREDIENT_TYPE' 별칭으로 사용 
       SUM(A.TOTAL_ORDER) AS TOTAL_ORDER  -- A 테이블의 TOTAL_ORDER 합계를 'TOTAL_ORDER' 별칭으로 사용
FROM FIRST_HALF A  -- A는 FIRST_HALF 테이블의 별칭
JOIN ICECREAM_INFO B  -- B는 ICECREAM_INFO 테이블의 별칭
  ON A.FLAVOR = B.FLAVOR  -- 두 테이블의 FLAVOR 정보를 기준으로 JOIN

-- 재료 종류별로 그룹화
GROUP BY INGREDIENT_TYPE

-- 총 주문량 순으로 정렬 (가장 많이 주문된 순)
ORDER BY TOTAL_ORDER DESC;  -- 내림차순 정렬을 위해 DESC 키워드 추가
```

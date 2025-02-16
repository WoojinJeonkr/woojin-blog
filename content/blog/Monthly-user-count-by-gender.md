---
external : false
title : "Monthly user count by gender"
tag : [Programmers, SQL]
date : 2025-02-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131532)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간: 10분
2. 해결 시간: 10분
3. 코드 시도 횟수: 2회

## 3. Problem solving process

문제를 해결하기 위해서는 여러 단계를 거쳐야 합니다. 먼저, USER_INFO 테이블과 ONLINE_SALE 테이블을 회원 ID(USER_ID)를 기준으로 조인해야 합니다. 이 조인은 두 테이블의 데이터를 연결하여 성별 정보와 판매 정보를 함께 분석할 수 있게 합니다.

다음으로, 성별 정보가 없는 행은 결과에서 제외해야 합니다. 이는 WHERE 절을 사용하여 성별이 NULL인 경우를 필터링함으로써 가능합니다. 이렇게 하면 성별 정보가 있는 회원들만 집계에 포함됩니다.

그다음, 년, 월, 성별을 기준으로 데이터를 그룹화해야 합니다. 이는 GROUP BY 절을 사용하여 년, 월, 성별로 데이터를 나누고 각 그룹 내에서 고유한 회원 ID 수를 집계하기 위해 COUNT(DISTINCT) 함수를 사용합니다.

마지막으로, 결과를 년, 월, 성별 순으로 오름차순 정렬하기 위해 ORDER BY 절을 사용하여 최종 결과를 얻습니다.

## 4. Answer

```sql
-- 년, 월, 성별 별로 상품을 구매한 회원수를 집계하고, 년, 월, 성별을 기준으로 오름차순 정렬하는 쿼리
SELECT 
  -- 판매일의 년도를 추출
  YEAR(os.SALES_DATE) AS YEAR,
  -- 판매일의 월을 추출
  MONTH(os.SALES_DATE) AS MONTH,
  -- 회원의 성별
  ui.GENDER,
  -- 각 그룹 내에서 고유한 회원 ID 수를 집계
  COUNT(DISTINCT ui.USER_ID) AS USERS
FROM 
  -- 온라인 상품 판매 정보 테이블
  ONLINE_SALE os
-- 회원 정보 테이블과 조인
JOIN 
  USER_INFO ui ON os.USER_ID = ui.USER_ID
-- 성별 정보가 없는 행은 제외
WHERE 
  ui.GENDER IS NOT NULL
-- 년, 월, 성별을 기준으로 그룹화
GROUP BY 
  YEAR(os.SALES_DATE),
  MONTH(os.SALES_DATE),
  ui.GENDER
-- 결과를 년, 월, 성별 순으로 오름차순 정렬
ORDER BY 
  YEAR(os.SALES_DATE),
  MONTH(os.SALES_DATE),
  ui.GENDER;
```

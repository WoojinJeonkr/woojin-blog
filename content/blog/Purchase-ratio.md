---
external : false
title : "Purchase ratio"
tag : [Programmers, SQL]
date : 2025-02-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131534)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간: 10분
2. 해결 시간: 30분
3. 코드 시도 횟수: 3회

## 3. Problem solving process

문제를 해결하기 위해서는 여러 단계를 거쳐야 합니다. 먼저, 2021년에 가입한 전체 회원 수를 계산해야 합니다. 이를 위해 USER_INFO 테이블에서 2021년에 가입한 회원 수를 집계합니다. 이 과정은 TOTAL_USERS라는 공통 테이블 표현식에서 수행됩니다.

다음으로, 2021년에 가입한 회원 중에서 상품을 구매한 회원 수를 각 월별로 계산해야 합니다. 이를 위해 ONLINE_SALE 테이블과 USER_INFO 테이블을 조인하여, 2021년에 가입한 회원이 구매한 데이터를 추출합니다. 이 과정은 PURCHASED_USERS라는 CTE에서 수행되며, 각 월별로 구매한 회원 수를 중복 없이 집계합니다.

마지막으로, 구매한 회원 비율을 계산하여 결과를 출력합니다. 이를 위해 PURCHASED_USERS CTE와 TOTAL_USERS CTE를 CROSS JOIN하여, 각 월별 구매한 회원 수를 전체 회원 수로 나누어 비율을 계산합니다. 계산된 비율은 소수점 두 번째 자리에서 반올림되며, 최종 결과는 년도와 월별로 정렬됩니다.

## 4. Answer

```sql
-- 코드 동작 순서:
-- 1. **2021년에 가입한 전체 회원 수 계산**: `TOTAL_USERS` CTE에서 2021년에 가입한 회원 수를 계산합니다.
-- 2. **2021년에 가입한 회원 중 구매한 회원 수 계산**: `PURCHASED_USERS` CTE에서 각 월별로 구매한 회원 수를 계산합니다.
-- 3. **구매한 회원 비율 계산**: 두 CTE를 `CROSS JOIN`하여 구매한 회원 비율을 계산합니다.
-- 4. **결과 정렬**: 최종적으로 결과를 년도와 월별로 정렬합니다.

-- 2021년에 가입한 전체 회원 수를 계산하는 CTE
WITH 
  TOTAL_USERS AS (
    -- 2021년에 가입한 회원 수를 계산
    SELECT 
      COUNT(USER_ID) AS TOTAL_USERS
    FROM 
      USER_INFO
    WHERE 
      YEAR(JOINED) = 2021  -- 2021년에 가입한 회원만 필터링
  ),
  
  -- 2021년에 가입한 회원 중에서 상품을 구매한 회원 수를 월별로 계산하는 CTE
  PURCHASED_USERS AS (
    -- 각 월별로 구매한 회원 수를 계산
    SELECT 
      YEAR(S.SALES_DATE) AS YEAR,  -- 구매한 년도
      MONTH(S.SALES_DATE) AS MONTH,  -- 구매한 월
      COUNT(DISTINCT S.USER_ID) AS PURCHASED_USERS  -- 중복 없이 구매한 회원 수
    FROM 
      ONLINE_SALE S  -- 온라인 판매 데이터
    JOIN 
      USER_INFO U ON S.USER_ID = U.USER_ID  -- 회원 정보와 조인
    WHERE 
      YEAR(U.JOINED) = 2021  -- 2021년에 가입한 회원만 필터링
    GROUP BY 
      YEAR(S.SALES_DATE), MONTH(S.SALES_DATE)  -- 년도와 월별로 그룹화
  )

-- 구매한 회원 수와 비율을 계산하여 출력
SELECT 
  P.YEAR,  -- 구매한 년도
  P.MONTH,  -- 구매한 월
  P.PURCHASED_USERS,  -- 구매한 회원 수
  -- 구매한 회원 비율 계산 (소수점 두 번째 자리에서 반올림)
  ROUND(P.PURCHASED_USERS / T.TOTAL_USERS, 1) AS PURCHASED_RATIO
FROM 
  PURCHASED_USERS P  -- 구매한 회원 수 CTE
CROSS JOIN 
  TOTAL_USERS T  -- 전체 회원 수 CTE
ORDER BY 
  P.YEAR, P.MONTH;  -- 년도와 월별로 정렬
```

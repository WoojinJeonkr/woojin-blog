---
external : false
title : "Query car rental fees by rental history"
tag : [Programmers, SQL]
date : 2025-01-31
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/151141)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 5분
2. 문제 해결 시간: 8분
3. 디버깅 시간: 4분
4. 코드 시도 횟수: 3회

## 3. Problem solving process

문제를 해결하기 위해서는 먼저 주어진 세 개의 테이블 구조를 이해해야 합니다. 차량 정보, 대여 기록, 할인 정책이 각각 다른 테이블에 저장되어 있으며, 이들을 적절히 연결하여 필요한 정보를 추출해야 합니다.

대여 금액을 계산하기 위해서는 일일 대여 요금과 대여 기간, 그리고 적용 가능한 할인율을 모두 고려해야 합니다. 일일 대여 요금은 차량 테이블에서, 대여 기간은 대여 기록의 시작일과 종료일의 차이로, 할인율은 할인 정책 테이블에서 각각 가져와야 합니다.

할인율은 대여 기간에 따라 다르게 적용되므로, 먼저 대여 기간을 계산한 뒤 해당하는 할인율을 찾아야 합니다. 7일 미만의 대여는 할인이 없고, 그 이상의 대여는 기간별로 다른 할인율이 적용됩니다. 이 정보들을 바탕으로 최종 대여 금액을 계산하고, 계산된 금액과 대여 기록 ID를 기준으로 정렬합니다.

## 4. Answer

```sql
-- 1. 트럭 차량의 대여 기록을 조회하고 각 기록별 대여 금액을 계산
SELECT 
  RH.HISTORY_ID,
  -- 4. 대여 금액 계산 (소수점 아래 버림)
  FLOOR(
    CASE 
      -- 5. 7일 미만 대여는 할인 없이 계산
      WHEN DATEDIFF(RH.END_DATE, RH.START_DATE) + 1 < 7 
        THEN RC.DAILY_FEE * (DATEDIFF(RH.END_DATE, RH.START_DATE) + 1)
      -- 6. 7일 이상 대여는 할인율 적용하여 계산
      ELSE 
        RC.DAILY_FEE * (DATEDIFF(RH.END_DATE, RH.START_DATE) + 1) * 
        -- 7. 할인율 조회를 위한 서브쿼리
        (1 - (SELECT DISCOUNT_RATE/100
              FROM CAR_RENTAL_COMPANY_DISCOUNT_PLAN
              WHERE CAR_TYPE = '트럭'
              -- 8. 대여 기간에 따른 할인율 기준 설정
              AND 
              CASE 
                WHEN DATEDIFF(RH.END_DATE, RH.START_DATE) + 1 >= 90 THEN '90일 이상'
                WHEN DATEDIFF(RH.END_DATE, RH.START_DATE) + 1 >= 30 THEN '30일 이상'
                ELSE '7일 이상'
              END = DURATION_TYPE))
    END
  ) AS FEE
-- 2. 차량 정보와 대여 기록 테이블 조인
FROM 
  CAR_RENTAL_COMPANY_CAR RC 
  JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY RH ON RC.CAR_ID = RH.CAR_ID
-- 3. 트럭 차량만 필터링
WHERE 
  RC.CAR_TYPE = '트럭'
-- 9. 계산된 결과를 정렬
ORDER BY 
  FEE DESC,  -- 대여 금액 기준 내림차순
  HISTORY_ID DESC  -- 같은 금액인 경우 대여 기록 ID 내림차순
```

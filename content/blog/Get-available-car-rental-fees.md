---
external : false
title : "Get available car rental fees"
tag : [Programmers, SQL]
date : 2025-02-08
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/157339)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간(문제 확인 ~ 첫 쿼리 작성 시점): 15분
2. 해결 시간(첫 쿼리 시도 ~ 문제 정답 확인): 20분
3. 코드 시도 횟수: 3회

## 3. Problem solving process

먼저 문제의 핵심 요구사항을 파악해보면 11월에 대여 가능한 세단과 SUV 중에서 30일 대여시 특정 금액 범위에 해당하는 차량을 찾는 것입니다.

기본적으로 차량 정보가 있는 CAR_RENTAL_COMPANY_CAR 테이블을 기준으로 시작하되, 11월 대여 가능 여부를 확인하기 위해 대여 이력 테이블과 LEFT JOIN이 필요합니다. 이때 대여 이력이 없는 차량을 찾아야 하므로 IS NULL 조건을 활용합니다.

30일 대여시 할인된 금액을 계산하기 위해서는 할인 정책 테이블과 JOIN이 필요하며, 차종별로 30일 이상 대여시의 할인율을 적용해야 합니다. 할인된 금액은 일일 대여 요금에 30을 곱하고 할인율을 적용하여 계산합니다.

최종적으로 계산된 금액이 50만원 이상 200만원 미만인 조건으로 필터링하고, 요구사항에 맞게 금액 내림차순, 차종 오름차순, 차량 ID 내림차순으로 정렬하여 결과를 출력합니다. 이때 중복을 제거하기 위해 DISTINCT를 사용합니다.

다만, 금액 계산시 정수부분만 출력해야 하므로 FLOOR 함수를 사용해야 하며, 날짜 조건을 처리할 때는 대여 시작일과 종료일의 범위가 11월과 겹치는 모든 경우를 고려해야 합니다. 또한 할인율 적용시 퍼센트 값을 소수점으로 변환하는 것을 잊지 말아야 합니다.

## 4. Answer

```sql
SELECT DISTINCT                                    -- 1. 중복 제거하여 최종 결과 조회
  C.CAR_ID,                                        -- 차량 ID
  C.CAR_TYPE,                                      -- 차량 타입
  FLOOR(C.DAILY_FEE * 30 * (1 - D.DISCOUNT_RATE/100)) AS FEE    -- 30일 대여 시 할인된 총 금액
FROM 
  CAR_RENTAL_COMPANY_CAR C                         -- 2. 차량 기본 정보 테이블
LEFT JOIN 
  CAR_RENTAL_COMPANY_RENTAL_HISTORY H              -- 3. 대여 이력과 LEFT JOIN
  ON C.CAR_ID = H.CAR_ID
  AND H.START_DATE <= '2022-11-30'                 -- 11월 대여 가능 여부 확인
  AND H.END_DATE >= '2022-11-01'
JOIN 
  CAR_RENTAL_COMPANY_DISCOUNT_PLAN D               -- 4. 할인 정책 정보와 JOIN
  ON C.CAR_TYPE = D.CAR_TYPE
  AND D.DURATION_TYPE = '30일 이상'                -- 30일 이상 할인율만 선택
WHERE 
  C.CAR_TYPE IN ('세단', 'SUV')                    -- 5. 세단, SUV만 필터링
  AND H.CAR_ID IS NULL                             -- 6. 11월에 대여 이력이 없는 차량만 선택
  AND C.DAILY_FEE * 30 * (1 - D.DISCOUNT_RATE/100) >= 500000    -- 7. 50만원 이상
  AND C.DAILY_FEE * 30 * (1 - D.DISCOUNT_RATE/100) < 2000000    -- 8. 200만원 미만 필터링
ORDER BY                                           -- 9. 정렬 조건 적용
  FEE DESC,                                        -- 대여 금액 내림차순
  C.CAR_TYPE ASC,                                  -- 차량 종류 오름차순
  C.CAR_ID DESC                                    -- 차량 ID 내림차순
```

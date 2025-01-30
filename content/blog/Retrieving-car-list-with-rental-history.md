---
external : false
title : "Retrieving car list with rental history"
tag : [Programmers, SQL]
date : 2025-01-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/157341)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 3분
2. 문제 해결 시간: 4분
3. 디버깅 시간: 2분
4. 코드 시도 횟수: 2회

## 3. Problem solving process

먼저 문제의 핵심 요구사항을 파악해보면, '세단'이면서 '10월에 대여 시작한' 자동차의 ID를 찾아야 합니다. 이를 위해서는 자동차 정보와 대여 기록을 모두 확인해야 하므로, 두 테이블을 연결하는 작업이 필요합니다.

테이블 연결은 CAR_ID를 기준으로 하되, 자동차 정보 테이블블(CAR_RENTAL_COMPANY_CAR)과 대여 기록 테이블(CAR_RENTAL_COMPANY_RENTAL_HISTORY)을 JOIN하여 진행합니다. 여기서 같은 차량이 10월에 여러 번 대여될 수 있으므로, DISTINCT를 사용하여 중복을 제거해야 합니다.

필터링 조건으로는 CAR_TYPE이 '세단'인 것과 대여 시작일(START_DATE)이 10월인 것을 WHERE 절에서 동시에 체크합니다. 마지막으로 문제에서 요구하는 대로 결과를 CAR_ID 기준 내림차순으로 정렬하면 됩니다.

## 4. Answer

```sql
-- 1. FROM: 두 테이블을 CAR_ID 기준으로 JOIN
-- 2. WHERE: 세단이면서 10월 대여 시작 데이터 필터링
-- 3. SELECT DISTINCT: 중복 제거하여 CAR_ID 선택
-- 4. ORDER BY: CAR_ID 내림차순 정렬
SELECT DISTINCT c.CAR_ID                           -- 3. 중복없이 자동차 ID만 선택
FROM CAR_RENTAL_COMPANY_CAR c                      -- 1. 자동차 정보 테이블
JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY h           -- 1. 대여 기록 테이블과 조인
  ON c.CAR_ID = h.CAR_ID                        -- 1. CAR_ID 기준으로 매칭
WHERE c.CAR_TYPE = '세단'                          -- 2. 세단인 차량만 필터링
  AND MONTH(h.START_DATE) = 10                  -- 2. 10월에 대여 시작한 기록만 필터링
ORDER BY c.CAR_ID DESC;                           -- 4. 자동차 ID 내림차순 정렬
```

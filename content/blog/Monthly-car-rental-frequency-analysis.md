---
external : false
title : "Monthly car rental frequency analysis"
tag : [Programmers, SQL]
date : 2025-01-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/151139)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 17m
2. 문제 해결 시간: 42m
3. 디버깅 시간: 18m
4. 코드 시도 횟수: 4회

## 3. Problem solving process

Common Table Expression은 SQL 쿼리 내에서 WITH 절을 사용하여 정의되는 임시 결과 집합으로, 복잡한 쿼리를 더 간결하고 가독성 있게 만들어주는 강력한 도구입니다. 해당 문제에서는 CTE를 활용하여 주어진 기간(2022년 8월부터 10월까지) 동안 총 대여 횟수가 5회 이상인 자동차들을 선별합니다. CTE의 주요 장점인 코드 재사용성과 가독성 향상을 활용하여, 해당 조건을 만족하는 자동차 ID들을 선별하는 과정을 명확하게 구조화할 수 있습니다.

다음으로, 선별된 자동차 ID들에 대해 월별 대여 횟수를 계산합니다. 이 과정에서 START_DATE 컬럼에서 월을 추출하여 그룹화의 기준으로 삼습니다. 또한, 특정 월의 대여 횟수가 0인 경우는 결과에서 제외해야 합니다.

마지막으로, 결과를 요구사항에 맞게 정렬합니다. 월을 기준으로 오름차순 정렬하고, 동일한 월 내에서는 자동차 ID를 기준으로 내림차순 정렬합니다.

## 4. Answer

```sql
-- 대여 횟수가 5회 이상인 자동차 ID를 선별하는 CTE
WITH RentalCounts AS (
  SELECT CAR_ID,
         COUNT(*) AS total_rentals
  FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
  WHERE START_DATE BETWEEN '2022-08-01' AND '2022-10-31'
  GROUP BY CAR_ID
  HAVING COUNT(*) >= 5
)
-- 선별된 자동차들의 월별 대여 횟수 계산
SELECT 
  EXTRACT(MONTH FROM START_DATE) AS MONTH,
  CAR_ID,
  COUNT(*) AS RECORDS
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE CAR_ID IN (SELECT CAR_ID FROM RentalCounts)
  AND START_DATE BETWEEN '2022-08-01' AND '2022-10-31'
GROUP BY EXTRACT(MONTH FROM START_DATE), CAR_ID
HAVING COUNT(*) > 0
ORDER BY MONTH ASC, CAR_ID DESC;
```

---
external : false
title : "Car rental status check"
tag : [Programmers, SQL]
date : 2025-02-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/157340)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간(문제 확인 ~ 첫 쿼리 작성 시점): 5분
2. 해결 시간(첫 쿼리 시도 ~ 문제 정답 확인): 8분
3. 코드 시도 횟수: 3회

## 3. Problem solving process

문제를 해결하기 위해서는 특정 날짜(2022년 10월 16일)에 각 자동차의 대여 상태를 확인해야 합니다. 우선 대여 상태를 판단하는 기준을 명확히 해야 하는데, 특정 날짜가 대여 시작일(START_DATE)과 대여 종료일(END_DATE) 사이에 있는 경우 해당 자동차는 '대여중' 상태입니다. 이를 위해 BETWEEN 연산자를 활용할 수 있습니다.

다음으로 각 자동차의 상태를 '대여중' 또는 '대여 가능'으로 표시하기 위해 CASE 문을 사용할 수 있습니다. 서브쿼리를 통해 2022년 10월 16일에 대여 중인 자동차 ID를 먼저 찾고, 이 결과를 메인 쿼리의 CASE 문에서 활용하여 대여 상태를 결정합니다.

마지막으로 동일한 자동차가 여러 번 대여된 경우 중복된 결과가 나올 수 있으므로 DISTINCT를 사용하여 중복을 제거해야 합니다. 그리고 문제의 요구사항대로 자동차 ID를 기준으로 내림차순 정렬하기 위해 ORDER BY절을 사용합니다.

## 4. Answer

```sql
SELECT DISTINCT CAR_ID,                           -- 1. 중복 제거된 자동차 ID 선택
  CASE                                            -- 2. 각 자동차의 대여 상태 확인 시작
    WHEN CAR_ID IN (                              -- 3. 해당 자동차가 대여중인지 확인
      SELECT CAR_ID                               -- 4. 서브쿼리: 대여중인 자동차 ID 조회
      FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY      
      WHERE '2022-10-16' BETWEEN START_DATE       -- 5. 특정 날짜가 대여 기간에 포함되는지 확인
                          AND END_DATE
    ) THEN '대여중'                               -- 6. 대여중인 경우
    ELSE '대여 가능'                              -- 7. 대여중이 아닌 경우
  END AS AVAILABILITY                             -- 8. 결과 컬럼명 지정
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY            -- 9. 대여 기록 테이블에서 데이터 조회
ORDER BY CAR_ID DESC                              -- 10. 자동차 ID 기준 내림차순 정렬
```

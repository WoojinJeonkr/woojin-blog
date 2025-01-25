---
external : false
title : "Finding average car rental duration"
tag : [Programmers, SQL]
date : 2025-01-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/157342)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 5분
2. 문제 해결 시간: 8분
3. 디버깅 시간: 4분
4. 코드 시도 횟수: 2회

## 3. Problem solving process

해당 문제는 평균 대여 기간이 7일 이상인 자동차를 찾고, 해당 자동차들의 ID와 평균 대여 기간을 출력하는 것이 목표입니다. 이를 위해 각 자동차별 대여 기간을 계산해야 하는데, 대여 시작일과 종료일의 차이에 당일을 포함하기 위해 DATEDIFF 함수 결과에 1을 더해야 합니다.

대여 기록 테이블에서 자동차 ID를 기준으로 그룹화하여 각 자동차별 평균 대여 기간을 계산합니다. 이때 HAVING 절을 사용하여 평균 대여 기간이 7일 이상인 자동차만 필터링합니다. 계산된 평균값은 소수점 첫째 자리까지 표시해야 하므로 ROUND 함수를 사용하여 반올림합니다. 마지막으로 평균 대여 기간을 기준으로 내림차순 정렬하되, 동일한 경우에는 자동차 ID를 기준으로 내림차순 정렬하여 최종 결과를 출력합니다.

## 4. Answer

```sql
-- SQL 실행 순서: FROM(1) -> GROUP BY(2) -> HAVING(3) -> SELECT(4) -> ORDER BY(5)

-- (1) 대여 기록 테이블에서 데이터를 가져옴
FROM 
  CAR_RENTAL_COMPANY_RENTAL_HISTORY

-- (2) 자동차 ID별로 그룹화
GROUP BY 
  CAR_ID

-- (3) 평균 대여 기간이 7일 이상인 자동차만 필터링
HAVING 
  AVG(DATEDIFF(END_DATE, START_DATE) + 1) >= 7

-- (4) 자동차 ID와 평균 대여 기간을 선택
SELECT 
  CAR_ID,
  -- 대여 기간의 평균을 계산하고 소수점 첫째 자리까지 반올림
  ROUND(AVG(DATEDIFF(END_DATE, START_DATE) + 1), 1) AS AVERAGE_DURATION

-- (5) 평균 대여 기간 내림차순, 같은 경우 자동차 ID 내림차순 정렬
ORDER BY 
  AVERAGE_DURATION DESC, 
  CAR_ID DESC
```

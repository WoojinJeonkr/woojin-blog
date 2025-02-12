---
external : false
title : "Get annual air pollution averages"
tag : [Programmers, SQL]
date : 2025-02-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/284530)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간: 3분
2. 해결 시간: 5분
3. 코드 시도 횟수: 1회

## 3. Problem solving process

문제 해결을 위해 먼저 주어진 테이블 구조를 파악했습니다. AIR_POLLUTION 테이블에는 지역별, 월별 미세먼지 데이터가 저장되어 있으며, 이 중 수원 지역의 데이터만 필요합니다.

연도별 평균을 구하기 위해서는 날짜 데이터에서 연도만 추출해야 하므로 YEAR 함수를 사용하기로 했습니다. 또한 평균값을 소수점 둘째 자리까지 표시해야 하므로 ROUND 함수를 활용했습니다.

마지막으로 결과를 연도순으로 정렬하기 위해 ORDER BY 절을 추가했습니다.

## 4. Answer

```sql
-- 1. YEAR 함수를 사용하여 날짜에서 연도만 추출
-- 2. WHERE 절로 수원 지역 데이터만 필터링
-- 3. GROUP BY로 연도별 그룹화
-- 4. AVG 함수로 평균값 계산 후 ROUND로 소수점 둘째 자리까지 반올림
-- 5. ORDER BY로 연도 기준 오름차순 정렬
SELECT
  YEAR(YM) AS YEAR,
  ROUND(AVG(PM_VAL1), 2) AS PM10,
  ROUND(AVG(PM_VAL2), 2) AS `PM2.5`
FROM
  AIR_POLLUTION
WHERE LOCATION2 = '수원'
GROUP BY YEAR
ORDER BY YEAR;
```

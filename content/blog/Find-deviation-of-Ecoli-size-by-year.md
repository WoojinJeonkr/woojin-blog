---
external : false
title : "Find deviation of Ecoli size by year"
tag : [Programmers, SQL]
date : 2024-06-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/299310)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 대장균 데이터 테이블에서 연도별 변화량을 계산합니다.
SELECT 
  YEAR(ED.DIFFERENTIATION_DATE) AS YEAR,  -- 분리 날짜에서 연도 추출

  -- 최대 군집 크기와 현재 군집 크기 차이를 'YEAR_DEV' 별칭으로 지정합니다.
  (JD.SIZE - ED.SIZE_OF_COLONY) AS YEAR_DEV,

  ED.ID  -- 대장균 데이터 고유 식별자
FROM ECOLI_DATA AS ED  -- ECOLI_DATA 테이블을 ED라는 별칭으로 사용

JOIN (  -- 연도별 최대 군집 크기를 계산하는 JOIN 절
  SELECT 
    YEAR(DIFFERENTIATION_DATE) AS YEAR,
    MAX(SIZE_OF_COLONY) AS SIZE
  FROM ECOLI_DATA  -- ECOLI_DATA 테이블에서 데이터 추출
  GROUP BY YEAR(DIFFERENTIATION_DATE)  -- 연도별로 그룹화
) AS JD  -- 결과 테이블을 JD라는 별칭으로 사용
ON YEAR(ED.DIFFERENTIATION_DATE) = JD.YEAR  -- 연도 기준으로 JOIN

-- 연도순, 변화량 순으로 정렬합니다.
ORDER BY YEAR, YEAR_DEV;
```

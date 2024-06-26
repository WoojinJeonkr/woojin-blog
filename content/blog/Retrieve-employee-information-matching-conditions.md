---
external : false
title : "Retrieve employee information matching conditions"
tag : [Programmers, SQL]
date : 2024-06-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/284527)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 직원들의 2022년 연간 총점을 조회합니다
SELECT 
  SUM(SCORE) AS SCORE, 
  HG.EMP_NO, 
  HE.EMP_NAME, 
  HE.POSITION, 
  HE.EMAIL 
FROM HR_EMPLOYEES HE  -- HR_EMPLOYEES 테이블을 HE라는 별칭으로 사용합니다
-- 직원 번호 기준으로 JOIN합니다
INNER JOIN HR_GRADE HG ON HE.EMP_NO = HG.EMP_NO

-- 연도별, 직원 번호별로 그룹화합니다
GROUP BY YEAR, EMP_NO

-- HAVING 절을 사용하여 2022년 데이터만 필터링합니다
HAVING HG.YEAR = '2022'

-- 총점 기준으로 내림차순 정렬합니다
ORDER BY SCORE DESC

-- 결과를 1행만 출력합니다
LIMIT 1;
```

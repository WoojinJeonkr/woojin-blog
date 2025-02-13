---
external : false
title : "Performance and bonus by year"
tag : [Programmers, SQL]
date : 2025-02-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/284528)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간: 8분
2. 해결 시간: 15분
3. 코드 시도 횟수: 2회

## 3. Problem solving process

문제를 해결하기 위해서는 먼저 연간 평균 평가 점수를 계산해야 합니다. HR_GRADE 테이블에는 상반기와 하반기 점수가 각각 저장되어 있으므로, 이를 평균 내어 연간 점수를 산출해야 합니다.

평균 점수를 구한 후에는 CASE 문을 사용하여 점수대별 등급을 부여합니다. 96점 이상은 S등급, 90점 이상은 A등급, 80점 이상은 B등급, 그 외는 C등급으로 분류됩니다.

성과금은 등급별로 연봉의 일정 비율로 계산됩니다. S등급은 20%, A등급은 15%, B등급은 10%, C등급은 0%입니다. 이를 계산하기 위해 HR_EMPLOYEES 테이블의 SAL 컬럼을 활용합니다.

## 4. Answer

```sql
-- 직원별 연간 평균 성과 점수를 구하고, 이에 따른 등급과 성과금을 계산
SELECT 
    E.EMP_NO,
    E.EMP_NAME,
    -- 평균 점수에 따른 등급 부여
    CASE 
      WHEN AVG(G.SCORE) >= 96 THEN 'S'
      WHEN AVG(G.SCORE) >= 90 THEN 'A'
      WHEN AVG(G.SCORE) >= 80 THEN 'B'
      ELSE 'C'
    END AS GRADE,
    -- 등급별 성과금 계산 (연봉 기준 비율 적용)
    CASE 
      WHEN AVG(G.SCORE) >= 96 THEN E.SAL * 0.2
      WHEN AVG(G.SCORE) >= 90 THEN E.SAL * 0.15
      WHEN AVG(G.SCORE) >= 80 THEN E.SAL * 0.1
      ELSE 0
    END AS BONUS
FROM 
  HR_EMPLOYEES E
  JOIN HR_GRADE G ON E.EMP_NO = G.EMP_NO
WHERE 
  G.YEAR = 2022
GROUP BY 
  E.EMP_NO, E.EMP_NAME, E.SAL
ORDER BY 
  E.EMP_NO
```

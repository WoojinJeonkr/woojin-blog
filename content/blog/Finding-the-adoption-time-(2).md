---
external : false
title : "Finding the adoption time (2)"
tag : [Programmers, SQL]
date : 2025-01-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59413)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 5m
2. 문제 해결 시간: 17m
3. 디버깅 시간: 7m
4. 코드 시도 횟수: 3회

## 3 Problem solving process

먼저 0부터 23까지의 모든 시간대를 생성해야 합니다. 이를 위해 두 개의 작은 서브쿼리를 CROSS JOIN하는 방법을 사용합니다. 첫 번째 서브쿼리는 0부터 3까지의 숫자를, 두 번째 서브쿼리는 0부터 5까지의 숫자를 생성합니다. 이 두 서브쿼리를 CROSS JOIN하면 0부터 23까지의 모든 조합을 얻을 수 있습니다.

다음으로, 생성된 시간대와 ANIMAL_OUTS 테이블을 LEFT JOIN합니다. LEFT JOIN을 사용하는 이유는 입양이 없는 시간대도 결과에 포함시키기 위함입니다. JOIN 조건은 생성된 시간과 ANIMAL_OUTS 테이블의 DATETIME 컬럼에서 추출한 시간이 일치하는 경우입니다.

마지막으로, SELECT 절에서 시간을 계산하고 각 시간대별 입양 건수를 집계합니다. WHERE 절을 사용하여 24 미만의 시간만 선택하고, GROUP BY로 시간별 그룹화를 수행합니다. 최종적으로 ORDER BY를 통해 결과를 시간 순으로 정렬합니다.

## 4. Answer

```sql
SELECT 
  (h1.HOUR + h2.h * 4) AS HOUR,  -- 5. 0부터 23까지의 시간을 계산하여 HOUR 컬럼으로 선택
  COUNT(A.ANIMAL_ID) AS COUNT    -- 6. 각 시간대별 입양된 동물 수를 계산
FROM 
  (
    SELECT 0 HOUR
    UNION SELECT 1
    UNION SELECT 2
    UNION SELECT 3
  ) h1                           -- 1. 0부터 3까지의 숫자를 생성하는 서브쿼리
  CROSS JOIN
  (
    SELECT 0 h
    UNION SELECT 1
    UNION SELECT 2
    UNION SELECT 3
    UNION SELECT 4
    UNION SELECT 5
  ) h2                           -- 2. 0부터 5까지의 숫자를 생성하는 서브쿼리
                                 -- 3. CROSS JOIN으로 두 서브쿼리를 결합하여 0부터 23까지의 조합 생성
LEFT JOIN 
  ANIMAL_OUTS A ON (h1.HOUR + h2.h * 4) = HOUR(A.DATETIME)  
                                 -- 4. 생성된 시간과 ANIMAL_OUTS 테이블을 LEFT JOIN
                                 --    모든 시간대를 유지하면서 해당 시간에 입양된 동물 정보 연결
WHERE 
  (h1.HOUR + h2.h * 4) < 24      -- 7. 24 미만의 시간만 선택 (0-23 시간대 유지)
GROUP BY 
  (h1.HOUR + h2.h * 4)           -- 8. 계산된 시간별로 결과를 그룹화
ORDER BY 
  (h1.HOUR + h2.h * 4)           -- 9. 시간 순으로 결과를 정렬
```

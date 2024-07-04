---
external : false
title : "Classifying by size of Ecoli 2"
tag : [Programmers, SQL]
date : 2024-07-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/301649)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 대장균 데이터 분류

-- 대장균 데이터 테이블(ECOLI_DATA)에서 데이터 조회
SELECT 
  ED.ID,
  CASE 
    -- NTILE 함수를 사용하여 4개 그룹 분류 (내림차순 정렬)
    WHEN NTILE(4) OVER (ORDER BY SIZE_OF_COLONY DESC) = 1 THEN 'CRITICAL'  -- 군집 크기 최대값 (가장 위험)
    WHEN NTILE(4) OVER (ORDER BY SIZE_OF_COLONY DESC) = 2 THEN 'HIGH'    -- 상위 2번째 군집 크기 (위험)
    WHEN NTILE(4) OVER (ORDER BY SIZE_OF_COLONY DESC) = 3 THEN 'MEDIUM'  -- 중간 군집 크기 (보통)
    WHEN NTILE(4) OVER (ORDER BY SIZE_OF_COLONY DESC) = 4 THEN 'LOW'     -- 하위 군집 크기 (낮음)
  END AS COLONY_NAME  -- 분류 결과를 'COLONY_NAME' 별칭으로 사용
FROM 
  ECOLI_DATA ED

-- 원본 데이터의 ID 순으로 정렬
ORDER BY 
  ED.ID;
```

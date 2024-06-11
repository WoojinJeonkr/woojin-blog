---
external : false
title : "Finding ecoli strains with all parental traits"
tag : [Programmers, SQL]
date : 2024-06-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/301647)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- ECOLI_DATA 테이블에서 대장균 개체의 ID, 형질, 부모 개체의 형질을 선택합니다
SELECT
  ED.ID, -- 대장균 개체의 ID
  ED.GENOTYPE, -- 대장균 개체의 형질
  -- 대장균 개체의 부모 개체의 형질을 서브쿼리를 통해 선택합니다
  (SELECT ED2.GENOTYPE FROM ECOLI_DATA ED2 WHERE ED2.ID = ED.PARENT_ID) AS PARENT_GENOTYPE
FROM
  ECOLI_DATA ED
-- 대장균 개체가 부모의 모든 형질을 가지고 있는지 확인하는 서브쿼리를 사용하여 필터링합니다
WHERE
  EXISTS (
    SELECT 1
    FROM ECOLI_DATA ED2
    WHERE ED2.ID = ED.PARENT_ID
    AND (ED.GENOTYPE & ED2.GENOTYPE) = ED2.GENOTYPE
  )
-- 결과를 대장균 개체의 ID에 대해 오름차순으로 정렬합니다
ORDER BY
  ED.ID ASC;
```

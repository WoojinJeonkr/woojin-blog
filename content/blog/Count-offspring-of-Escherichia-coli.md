---
external : false
title : "Count offspring of Escherichia coli"
tag : [Programmers, SQL]
date : 2024-06-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/299305)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- ECOLI_DATA 테이블에서 모든 레코드를 선택합니다
SELECT A.ID, COALESCE(B.COUNT, 0) AS CHILD_COUNT
-- ECOLI_DATA 테이블을 A로 별칭하고, 부모 레코드 개수를 계산하기 위해 서브쿼리를 사용합니다
-- 서브쿼리에서는 각 부모 레코드(PARENT_ID)의 자식 레코드 개수를 COUNT로 계산하고, PARENT_ID가 NULL이 아닌 경우에 대해서만 그룹화합니다
FROM ECOLI_DATA A 
LEFT JOIN (
    -- 부모 레코드(PARENT_ID)를 기준으로 그룹화하고 COUNT 함수를 사용하여 자식 레코드의 개수를 계산합니다
    SELECT PARENT_ID, COUNT(*) AS COUNT
    FROM ECOLI_DATA
    GROUP BY PARENT_ID
    HAVING PARENT_ID IS NOT NULL
  ) B 
-- A 테이블의 ID와 B 테이블의 PARENT_ID를 조인합니다
ON A.ID = B.PARENT_ID
-- ID를 기준으로 오름차순 정렬하여 결과를 반환합니다
ORDER BY ID;
```

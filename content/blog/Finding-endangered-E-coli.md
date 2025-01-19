---
external : false
title : "Finding endangered E coli"
tag : [Programmers, SQL]
date : 2025-01-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/301651)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 25분
2. 문제 해결 시간: 40분
3. 디버깅 시간: 20분
4. 코드 시도 횟수: 5회

## 3. Problem solving process

대장균의 세대 구조를 파악하기 위해서는 우선 재귀적 접근이 필요합니다. 이를 위해 WITH RECURSIVE를 사용하여 세대 트리를 구성합니다. 시작점은 부모가 없는(PARENT_ID가 NULL인) 최초의 대장균들을 찾아 이들을 1세대로 지정하는 것입니다.

여기서부터 재귀적으로 각 대장균의 자식을 찾아가며, 부모의 세대 수에 1을 더해가면서 모든 대장균의 세대를 결정합니다.

세대 구조가 완성되면, 각 세대에서 자식이 없는 대장균을 찾아야 합니다. 이는 LEFT OUTER JOIN을 활용하여 현재 대장균 ID가 다른 대장균의 부모 ID로 존재하지 않는 경우를 찾는 방식으로 구현할 수 있습니다. 마지막으로 이렇게 찾은 자식이 없는 대장균들을 세대별로 그룹화하여 개수를 집계합니다.

## 4. Answer

```sql
WITH RECURSIVE GENERATION_TREE(ID, PARENT_ID, n) as (
  -- 1. 첫 번째 세대(PARENT_ID가 NULL인 최상위 대장균) 찾기
  SELECT ID, PARENT_ID, 1 AS n
  FROM ECOLI_DATA
  WHERE PARENT_ID IS NULL
  UNION ALL  
  -- 2. 재귀적으로 자식 세대들을 찾아가며 세대 수(n) 증가
  SELECT child.ID,
         child.PARENT_ID,
         parent.n + 1 AS n
  FROM ECOLI_DATA child
  INNER JOIN GENERATION_TREE parent
    ON child.PARENT_ID = parent.ID
)
-- 3. 각 세대별로 자식이 없는 대장균의 수를 집계
SELECT COUNT(current_gen.n) AS COUNT, 
       current_gen.n AS GENERATION 
FROM GENERATION_TREE current_gen
-- 4. 자식이 없는 대장균을 찾기 위해 LEFT JOIN 사용
LEFT OUTER JOIN GENERATION_TREE child_check
  ON current_gen.ID = child_check.PARENT_ID
-- 5. 자식이 없는 대장균만 필터링
WHERE child_check.PARENT_ID IS NULL 
-- 6. 세대별로 그룹화
GROUP BY current_gen.n;
```

---
external : false
title : "Finding big fish by species"
tag : [Hackerrank, SQL]
date : 2024-06-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/293261)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 물고기 정보를 조회합니다. (ID, 물고기 이름, 길이)
SELECT ID, FISH_NAME, FISH_INFO.LENGTH AS LENGTH
FROM FISH_INFO

-- 물고기 이름 정보 테이블과 물고기 종류 기준으로 JOIN합니다.
JOIN FISH_NAME_INFO
  ON FISH_INFO.FISH_TYPE = FISH_NAME_INFO.FISH_TYPE

-- 각 물고기 종류별 최대 길이를 가진 물고기만 조회합니다.
WHERE FISH_INFO.FISH_TYPE IN (
  -- 각 물고기 종류별 최대 길이를 찾는 서브쿼리
  SELECT FISH_TYPE
  FROM FISH_INFO
  GROUP BY FISH_TYPE
  HAVING LENGTH = MAX(LENGTH)
)

-- ID 기준으로 오름차순 정렬합니다.
ORDER BY ID;
```

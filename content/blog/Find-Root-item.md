---
external : false
title : "Find Root item"
tag : [Programmers, SQL]
date : 2025-03-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/273710)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 아이템 ID와 이름을 조회하는 쿼리
SELECT
  -- 아이템 ID
  I.ITEM_ID AS ITEM_ID,
  -- 아이템 이름
  I.ITEM_NAME AS ITEM_NAME
FROM 
  -- 아이템 정보 테이블
  ITEM_INFO I
-- 조건: 아이템 ID가 ITEM_TREE 테이블에서 상위 아이템 ID가 없는 아이템 ID에 포함될 때
WHERE 
  I.ITEM_ID IN (
    -- 상위 아이템 ID가 없는 아이템 ID를 조회하는 서브쿼리
    SELECT T.ITEM_ID
    FROM ITEM_TREE T
    -- 조건: 상위 아이템 ID가 없는 경우(즉, 최상위 아이템)
    WHERE T.PARENT_ITEM_ID IS NULL
  );
```

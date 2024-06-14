---
external : false
title : "Finding items that cannot be upgraded"
tag : [Programmers, SQL]
date : 2024-06-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/273712)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 부모 아이템이 없는 아이템을 찾기 위한 쿼리
-- ITEM_INFO 테이블과 ITEM_TREE 테이블을 조인하여 사용
-- 부모 아이템이 없는 경우를 찾기 위해 ITEM_TREE 테이블을 부모 아이템으로 그룹화하고 필터링
SELECT
  I.ITEM_ID AS ITEM_ID, -- 아이템 ID 선택
  I.ITEM_NAME AS ITEM_NAME, -- 아이템 이름 선택
  I.RARITY AS RARITY -- 아이템 희귀도 선택
FROM
  ITEM_INFO I
  INNER JOIN ITEM_TREE T
    ON I.ITEM_ID=T.ITEM_ID
WHERE T.ITEM_ID NOT IN(SELECT PARENT_ITEM_ID
                        FROM ITEM_TREE
                        WHERE PARENT_ITEM_ID IS NOT NULL
                        GROUP BY PARENT_ITEM_ID) -- 부모 아이템이 없는 아이템 필터링
ORDER BY
  I.ITEM_ID DESC; -- 아이템 ID를 내림차순으로 정렬
```

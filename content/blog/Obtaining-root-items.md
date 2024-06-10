---
external : false
title : "Obtaining root items"
tag : [Programmers, SQL]
date : 2024-06-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/273710)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- ITEM_INFO 테이블과 ITEM_TREE 테이블을 조인하여 ITEM_ID와 ITEM_NAME을 선택합니다
SELECT T.ITEM_ID AS ITEM_ID, I.ITEM_NAME AS ITEM_NAME
-- ITEM_INFO 테이블은 I로, ITEM_TREE 테이블은 T로 별칭(alias)을 지정합니다
FROM ITEM_INFO I
JOIN ITEM_TREE T
-- ITEM_TREE 테이블의 ITEM_ID와 ITEM_INFO 테이블의 ITEM_ID를 조인 조건으로 사용합니다
ON T.ITEM_ID = I.ITEM_ID
-- 부모 아이템 ID가 NULL인 경우를 필터링합니다.
WHERE PARENT_ITEM_ID IS NULL
```

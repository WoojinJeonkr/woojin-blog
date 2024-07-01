---
external : false
title : "Get-upgraded-items"
tag : [Programmers, SQL]
date : 2024-07-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/273711)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- ITEM_TREE와 ITEM_INFO 테이블에서 아이템 정보를 선택합니다.
SELECT
  IT.ITEM_ID,  -- ITEM_TREE 테이블의 ITEM_ID
  II.ITEM_NAME,  -- ITEM_INFO 테이블의 ITEM_NAME
  II.RARITY  -- ITEM_INFO 테이블의 RARITY
FROM
  ITEM_TREE AS IT  -- ITEM_TREE 테이블을 IT로 별칭 설정
  INNER JOIN ITEM_INFO AS II  -- ITEM_INFO 테이블을 II로 별칭 설정
    ON II.ITEM_ID = IT.ITEM_ID  -- ITEM_INFO의 ITEM_ID와 ITEM_TREE의 ITEM_ID를 조인
WHERE EXISTS (
  -- PARENT_ITEM_ID가 RARE_INFO 테이블에서 RARITY가 'RARE'인 경우 존재하는지 확인
  SELECT 1
  FROM ITEM_INFO AS RARE_INFO  -- ITEM_INFO 테이블을 RARE_INFO로 별칭 설정
  WHERE RARE_INFO.ITEM_ID = IT.PARENT_ITEM_ID  -- ITEM_INFO의 ITEM_ID와 ITEM_TREE의 PARENT_ITEM_ID를 비교
  AND RARE_INFO.RARITY = 'RARE'  -- ITEM_INFO의 RARITY가 'RARE'인 경우만 선택
)
ORDER BY
  IT.ITEM_ID DESC  -- ITEM_ID를 내림차순으로 정렬
```

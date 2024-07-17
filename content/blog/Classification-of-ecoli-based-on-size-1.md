---
external : false
title : "Classification of E. coli Based on Size 1"
tag : [Programmers, SQL]
date : 2024-07-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/299307)에서 확인하실 수 있습니다.

## 2. Answer

```sql
SELECT
  ID,
  CASE -- CASE 문을 사용하여 SIZE_OF_COLONY 값에 따라 'LOW', 'MEDIUM', 'HIGH' 카테고리 분류
    WHEN SIZE_OF_COLONY <= 100 THEN 'LOW' -- 콜로니 크기가 100 이하이면 'LOW'
    WHEN SIZE_OF_COLONY <= 1000 THEN 'MEDIUM' -- 콜로니 크기가 1000 이하이면 'MEDIUM'
    ELSE 'HIGH' -- 그 외는 'HIGH'
  END AS SIZE
FROM
  ECOLI_DATA
WHERE
  SIZE_OF_COLONY IS NOT NULL -- SIZE_OF_COLONY 값이 NULL이 아닌 데이터만 분류
ORDER BY
  ID -- 결과를 ID 기준으로 오름차순 정렬
```

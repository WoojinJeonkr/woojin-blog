---
external : false
title : "Find top 10 largest fish"
tag : [Programmers, SQL]
date : 2024-06-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/298517)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- FISH_INFO 테이블에서 물고기의 ID와 길이(LENGTH)를 선택합니다
SELECT ID, LENGTH
-- 길이를 기준으로 내림차순으로 정렬하며, NULL 값은 10으로 대체합니다
ORDER BY IFNULL(LENGTH, 10) DESC, ID
-- 결과는 상위 10개의 행만 반환합니다
LIMIT 10;
```

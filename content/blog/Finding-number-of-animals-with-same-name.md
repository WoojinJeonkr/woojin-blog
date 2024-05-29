---
external : false
title : "Finding number of animals with same name"
tag : [Programmers, SQL]
date : 2024-05-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59041)에서 확인하실 수 있습니다.

## 2. Solve

```sql
-- 동일한 이름을 가진 동물의 수를 찾는 쿼리입니다.
-- ANIMAL_INS 테이블에서 이름을 그룹화하고 해당 이름의 개체 수를 세어줍니다.
SELECT NAME, COUNT(NAME) AS COUNT FROM ANIMAL_INS 
-- 이름으로 그룹화된 결과 중 개체 수가 1보다 큰 그룹만 필터링합니다.
GROUP BY NAME HAVING COUNT(NAME) > 1
-- 결과를 이름 순으로 정렬합니다.
ORDER BY NAME;
```

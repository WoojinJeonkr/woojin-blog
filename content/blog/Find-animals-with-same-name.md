---
external : false
title : "Find animals with same name"
tag : [Programmers, SQL]
date : 2025-04-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59041)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- NAME 열과 해당 이름의 개수를 COUNT로 계산하여 선택
SELECT NAME, COUNT(NAME) AS COUNT
-- ANIMAL_INS 테이블에서 데이터를 조회
FROM ANIMAL_INS
-- NAME을 기준으로 그룹화하여 동일한 이름끼리 묶음
GROUP BY NAME
-- 그룹화된 이름 중에서 중복된 이름만 필터링
HAVING COUNT(NAME) > 1
-- 결과를 NAME 기준으로 오름차순 정렬
ORDER BY NAME;
```

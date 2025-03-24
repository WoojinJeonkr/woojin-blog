---
external : false
title : "Find maximum value"
tag : [Programmers, SQL]
date : 2025-03-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59415)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- ANIMAL_INS 테이블에서 가장 최근의 입소 시간을 가진 행의 DATETIME을 선택
SELECT DATETIME 
FROM ANIMAL_INS 
-- ANIMAL_INS 테이블에서 가장 큰 DATETIME 값 조회
WHERE DATETIME = (SELECT MAX(DATETIME) FROM ANIMAL_INS);
```

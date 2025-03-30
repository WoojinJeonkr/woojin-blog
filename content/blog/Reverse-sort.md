---
external : false
title : "Reverse sort"
tag : [Programmers, SQL]
date : 2025-03-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59035)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- STEP2: 가져온 데이터 중 NAME과 DATETIME 열을 조회합니다
SELECT NAME, DATETIME
-- STEP1: ANIMAL_INS 테이블에서 데이터를 가져옵니다
FROM ANIMAL_INS
-- STEP3: 조회된 결과를 ANIMAL_ID를 기준으로 내림차순으로 정렬
ORDER BY ANIMAL_ID DESC;
```

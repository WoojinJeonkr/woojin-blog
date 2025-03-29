---
external : false
title : "Find Lucy and Ella"
tag : [Programmers, SQL]
date : 2025-03-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59046)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- STEP 4: 조건에 맞는 데이터의 ANIMAL_ID, NAME, SEX_UPON_INTAKE를 조회합니다
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
-- STEP 1: ANIMAL_INS 테이블에서 데이터를 가져옵니다
FROM ANIMAL_INS
-- STEP 2: NAME이 'Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty'인 데이터만 필터링합니다
WHERE NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
-- STEP 3: ANIMAL_ID를 기준으로 오름차순으로 정렬합니다
ORDER BY ANIMAL_ID;
```

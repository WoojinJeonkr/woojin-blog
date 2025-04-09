---
external : false
title : "Finding missing records"
tag : [Programmers, SQL]
date : 2025-04-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59042)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 5) 조건에 만족하는 동물 보호소에서 나간 동물의 ID와 이름을 선택
SELECT A.ANIMAL_ID, A.NAME
-- 1) ANIMAL_OUTS 테이블을 A로 별칭을 지정하고 ANIMAL_OUTS 테이블에서 데이터를 가져옴
FROM ANIMAL_OUTS A
-- 2) ANIMAL_INS 테이블을 B로 별칭 지정하고, A 테이블을 기준으로 왼쪽 외부 조인을 수행
LEFT OUTER JOIN ANIMAL_INS B
-- 3) A 테이블과 B 테이블의 ANIMAL_ID를 기준으로 조인
ON A.ANIMAL_ID = B.ANIMAL_ID
-- 4) B 테이블에 ANIMAL_ID가 없는 경우(보호소에 들어온 기록이 없는 동물)를 조건으로 필터링
WHERE B.ANIMAL_ID IS NULL
-- 6) B 테이블의 ANIMAL_ID를 기준으로 결과를 오름차순 정렬
ORDER BY B.ANIMAL_ID
```

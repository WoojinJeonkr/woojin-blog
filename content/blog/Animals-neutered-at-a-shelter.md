---
external : false
title : "Animals neutered at a shelter"
tag : [Programmers, SQL]
date : 2024-06-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59045)에서 확인하실 수 있습니다.

## 2. Solve

```sql
-- ANIMAL_INS 테이블과 ANIMAL_OUTS 테이블을 조인하여
-- 입양 갈 때와 입양 올 때의 성별 상태가 다른 동물들의 목록을 조회합니다.
SELECT I.ANIMAL_ID,    -- 동물의 ID
       I.ANIMAL_TYPE,  -- 동물의 종류
       I.NAME          -- 동물의 이름
FROM ANIMAL_INS AS I   -- ANIMAL_INS 테이블의 별칭을 I로 지정
JOIN ANIMAL_OUTS AS O  -- ANIMAL_OUTS 테이블의 별칭을 O로 지정
ON I.ANIMAL_ID = O.ANIMAL_ID  -- 두 테이블을 동물 ID 기준으로 조인
WHERE I.SEX_UPON_INTAKE != O.SEX_UPON_OUTCOME  -- 입소 시 성별 상태와 출소 시 성별 상태가 다른 경우
ORDER BY I.ANIMAL_ID;  -- 동물 ID를 기준으로 정렬하여 결과를 출력
```

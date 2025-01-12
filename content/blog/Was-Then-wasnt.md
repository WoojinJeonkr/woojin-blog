---
external : false
title : "Was Then wasnt"
tag : [Programmers, SQL]
date : 2025-01-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59043)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 10m
2. 문제 해결 시간: 20m
3. 디버깅 시간: 6m
4. 코드 시도 횟수: 2회

## 3. Problem solving process

먼저 ANIMAL_INS와 ANIMAL_OUTS 테이블을 ANIMAL_ID를 기준으로 조인해야 합니다. 이는 각 동물의 보호 시작 정보와 입양 정보를 연결하기 위함입니다.

그 다음, 조인된 결과에서 ANIMAL_INS의 DATETIME(보호 시작일)이 ANIMAL_OUTS의 DATETIME(입양일)보다 늦은 경우를 찾아야 합니다. 이는 입양일이 보호 시작일보다 빠르게 잘못 입력된 경우를 의미합니다.

이렇게 찾아낸 동물들의 ANIMAL_ID와 NAME을 선택하고, 마지막으로 결과를 ANIMAL_INS의 DATETIME을 기준으로 오름차순 정렬합니다. 이렇게 하면 보호 시작일이 빠른 순서대로 결과가 정렬됩니다.

## 4. Answer

```sql
-- 동물의 ID와 이름을 선택
SELECT i.ANIMAL_ID, i.NAME
-- ANIMAL_INS 테이블에서 시작
FROM ANIMAL_INS i
-- ANIMAL_OUTS 테이블과 ANIMAL_ID를 기준으로 조인
JOIN ANIMAL_OUTS o ON i.ANIMAL_ID = o.ANIMAL_ID
-- 보호 시작일이 입양일보다 늦은 경우 필터링
WHERE i.DATETIME > o.DATETIME
-- 보호 시작일 기준으로 오름차순 정렬
ORDER BY i.DATETIME
```

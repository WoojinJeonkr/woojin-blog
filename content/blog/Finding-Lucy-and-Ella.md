---
external : false
title : "Finding Lucy and Ella"
tag : [Programmers, SQL]
date : 2025-01-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59046)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 3분
2. 문제 해결 시간: 6분
3. 디버깅 시간: 1분
4. 코드 시도 횟수: 1회

## 3. Problem solving process

주어진 문제를 해결하기 위해 SELECT 문을 사용하여 필요한 컬럼들(동물 아이디, 이름, 성별 및 중성화 여부)을 선택합니다.
WHERE 절에서는 IN 연산자를 활용하여 특정 이름을 가진 동물들만 필터링하며, 최종 결과는 ANIMAL_ID를 기준으로 오름차순 정렬하여 출력합니다.

## 4. Answer

```sql
-- 특정 이름을 가진 동물들의 정보를 조회하는 쿼리
SELECT 
  ANIMAL_ID,           -- 동물 아이디
  NAME,               -- 동물 이름
  SEX_UPON_INTAKE     -- 성별 및 중성화 여부
FROM 
  ANIMAL_INS
WHERE 
  NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
ORDER BY 
  ANIMAL_ID;          -- 아이디 기준 오름차순 정렬
```

---
external : false
title : "Long term animals (2)"
tag : [Programmers, SQL]
date : 2025-02-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59411)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간(문제 확인 ~ 첫 쿼리 작성 시점): 5분
2. 해결 시간(첫 쿼리 시도 ~ 문제 정답 확인): 3분
3. 코드 시도 횟수: 1회

## 3. Problem solving process

이 문제는 보호소에서 가장 오래 머문 동물을 찾는 것이 핵심입니다. 보호 기간을 계산하기 위해서는 입양일에서 보호 시작일을 빼야 합니다. 이를 위해 두 테이블의 데이터가 모두 필요하므로, ANIMAL_INS와 ANIMAL_OUTS 테이블을 조인해야 합니다.

테이블 조인은 ANIMAL_ID를 기준으로 수행하며, 이는 각 동물의 고유 식별자이기 때문입니다. 조인된 테이블에서 DATEDIFF 함수를 사용하여 각 동물의 보호 기간을 계산할 수 있습니다. 이 계산된 기간을 기준으로 내림차순 정렬하면 가장 오래 보호된 동물부터 정렬됩니다.

마지막으로 문제에서 요구하는 대로 가장 오래 보호된 두 마리의 정보만 필요하므로, LIMIT 2를 사용하여 결과를 제한합니다.

## 4. Answer

```sql
-- 1. ANIMAL_INS와 ANIMAL_OUTS 테이블을 ANIMAL_ID 기준으로 조인
-- 2. 각 동물의 보호기간을 계산 (입양일 - 보호시작일)
-- 3. 보호기간이 긴 순서대로 정렬
-- 4. 상위 2개의 결과만 선택
SELECT 
  ANIMAL_INS.ANIMAL_ID,   -- 동물 ID 선택
  ANIMAL_INS.NAME         -- 동물 이름 선택
FROM 
  ANIMAL_INS             -- 보호소 들어온 동물 테이블
JOIN 
  ANIMAL_OUTS           -- 입양 보낸 동물 테이블
  ON ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID    -- 동물 ID로 테이블 연결
ORDER BY 
  DATEDIFF(ANIMAL_OUTS.DATETIME, ANIMAL_INS.DATETIME) DESC    -- 보호기간 내림차순 정렬
LIMIT 2;                  -- 상위 2개 결과만 출력
```

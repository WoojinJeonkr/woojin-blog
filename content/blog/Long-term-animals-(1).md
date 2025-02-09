---
external : false
title : "Long term animals (1)"
tag : [Programmers, SQL]
date : 2025-02-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59044)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간(문제 확인 ~ 첫 쿼리 작성 시점): 8분
2. 해결 시간(첫 쿼리 시도 ~ 문제 정답 확인): 5분
3. 코드 시도 횟수: 2회

## 3. Problem solving process

먼저 문제의 핵심 요구사항을 파악해보면 아직 입양되지 않은 동물들 중에서 가장 오래 보호소에 있었던 동물 3마리를 찾아야 합니다. 이를 위해서는 입양되지 않은 동물을 구분해야 합니다.

입양되지 않은 동물을 찾기 위해서는 ANIMAL_INS 테이블과 ANIMAL_OUTS 테이블을 비교합니다. ANIMAL_INS에는 있지만 ANIMAL_OUTS에는 없는 동물이 바로 아직 입양되지 않은 동물입니다. 이러한 데이터를 찾기 위해 LEFT JOIN을 사용하고, 입양 기록이 없는 경우를 WHERE 절로 필터링하면 됩니다.

보호 시작일을 기준으로 정렬하면 가장 오래 보호소에 있었던 동물부터 정렬되며, 여기서 상위 3마리만 선택하면 됩니다.

## 4. Answer

```sql
-- 전체 쿼리 실행 순서: FROM -> JOIN -> WHERE -> SELECT -> ORDER BY -> LIMIT

-- 1. ANIMAL_INS 테이블을 기준으로 ANIMAL_OUTS 테이블과 LEFT JOIN
-- (보호소에 있는 모든 동물을 기준으로 입양 기록과 매칭)
SELECT i.NAME, i.DATETIME
FROM ANIMAL_INS i
LEFT JOIN ANIMAL_OUTS o ON i.ANIMAL_ID = o.ANIMAL_ID

-- 2. 입양을 가지 않은 동물만 필터링
-- (ANIMAL_OUTS에 매칭되는 데이터가 없는 경우 = 입양되지 않은 동물)
WHERE o.ANIMAL_ID IS NULL

-- 3. 보호 시작일 기준으로 오름차순 정렬
-- (가장 오래된 동물부터 정렬)
ORDER BY i.DATETIME

-- 4. 최상위 3개의 결과만 출력
-- (가장 오래 보호소에 있었던 3마리만 선택)
LIMIT 3;
```

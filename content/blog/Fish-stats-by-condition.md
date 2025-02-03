---
external : false
title : "Fish stats by condition"
tag : [Programmers, SQL]
date : 2025-02-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/298519)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간(문제 확인 ~ 첫 쿼리 작성 시점): 3분
2. 해결 시간(첫 쿼리 시도 ~ 문제 정답 확인): 5분
3. 코드 시도 횟수: 2회

## 3. Problem solving process

문제를 해결하기 위해서는 먼저 FISH_INFO 테이블의 구조와 특징을 이해해야 합니다. 물고기의 길이 정보 처리가 핵심인데, 특히 10cm 이하의 물고기는 LENGTH가 NULL로 저장되어 있고 이를 평균 계산 시 10cm로 처리해야 한다는 점이 중요합니다.

NULL 값을 10으로 대체하는 COALESCE 함수를 사용하여 정확한 평균 길이를 계산할 수 있으며, 물고기 종류별로 데이터를 그룹화한 후 각 그룹의 평균 길이가 33cm 이상인 경우만 필터링하는 GROUP BY와 HAVING 절이 필요합니다.

결과는 물고기 종류별로 잡은 수(COUNT), 최대 길이(MAX), 물고기 종류(FISH_TYPE)를 보여줘야 하며, FISH_TYPE을 기준으로 오름차순 정렬이 필요합니다. 각 컬럼명도 요구사항에 맞게 FISH_COUNT, MAX_LENGTH, FISH_TYPE으로 지정되어야 하는 점을 고려하여 SQL 쿼리를 작성해야 합니다.

## 4. Answer

```sql
-- 1. FROM: FISH_INFO 테이블에서 데이터를 가져옴
-- 2. GROUP BY: FISH_TYPE으로 그룹화
-- 3. HAVING: 평균 길이가 33cm 이상인 그룹만 필터링
-- 4. SELECT: 각 그룹별 통계 계산
-- 5. ORDER BY: FISH_TYPE 기준으로 정렬
SELECT 
  COUNT(*) as FISH_COUNT,    -- 각 물고기 종류별 총 마리수
  MAX(LENGTH) as MAX_LENGTH, -- 각 물고기 종류별 최대 길이
  FISH_TYPE                  -- 물고기 종류 번호
FROM 
  FISH_INFO
GROUP BY 
  FISH_TYPE
HAVING 
  AVG(COALESCE(LENGTH, 10)) >= 33  -- NULL값은 10cm로 처리하여 평균 계산
ORDER BY 
  FISH_TYPE                         -- 물고기 종류 기준 오름차순 정렬
```

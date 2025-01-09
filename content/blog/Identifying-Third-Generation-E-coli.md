---
external : false
title : "Identifying Third Generation E coli"
tag : [Programmers, SQL]
date : 2025-01-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/301650)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 20m
2. 문제 해결 시간: 1h 30m
3. 디버깅 시간: 40m
4. 코드 시도 횟수: 5회

## 3. Problem solving process

문제를 해결하기 위해 재귀적 공통 테이블 표현식을 활용합니다. 재귀적 CTE는 계층적 데이터나 반복적인 계산을 처리하기 위해 SQL에서 제공하는 강력한 도구입니다. 이를 사용하면 데이터의 계층 구조를 탐색하거나 특정 조건에 따라 반복적으로 데이터를 확장할 수 있습니다. 특히, 대장균 세대와 같이 부모-자식 관계를 기반으로 한 데이터를 다룰 때 유용합니다.

재귀적 CTE는 두 가지 주요 구성 요소로 이루어져 있습니다. 첫 번째는 앵커 멤버로, 재귀의 시작점을 정의합니다. 이는 초기 데이터를 선택하는 쿼리로, 보통 최상위 레벨의 데이터를 반환합니다. 두 번째는 재귀 멤버로, 앵커 멤버의 결과를 바탕으로 반복적으로 실행되는 쿼리입니다. 이 과정은 종료 조건이 충족될 때까지 계속되며, 종료 조건이 없다면 무한 루프에 빠질 수 있으므로 반드시 적절한 종료 조건을 설정해야 합니다.

먼저, WITH RECURSIVE 구문을 사용하여 재귀적 CTE를 정의합니다. 여기서 앵커 멤버는 PARENT_ID가 NULL인 대장균을 선택하여 1세대 대장균을 식별합니다. 이후 재귀 멤버에서는 부모 ID를 기준으로 자식 대장균을 찾아 세대를 계산합니다. 이 방식으로 각 세대의 대장균을 반복적으로 추출할 수 있습니다.

마지막으로, 메인 쿼리에서 3세대에 해당하는 대장균만 필터링하여 ID를 오름차순으로 정렬합니다.

## 3. Answer

```sql
WITH RECURSIVE GenerationCTE AS (
  -- 기본 케이스: 1세대 대장균 선택
  SELECT ID, PARENT_ID, 1 AS Generation
  FROM ECOLI_DATA
  WHERE PARENT_ID IS NULL
  
  UNION ALL
  
  -- 재귀 케이스: 다음 세대 대장균 선택
  SELECT e.ID, e.PARENT_ID, g.Generation + 1
  FROM ECOLI_DATA e
  JOIN GenerationCTE g ON e.PARENT_ID = g.ID
)
-- 3세대 대장균 선택 및 ID 기준 오름차순 정렬
SELECT ID
FROM GenerationCTE
WHERE Generation = 3
ORDER BY ID ASC;
```

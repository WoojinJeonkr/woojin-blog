---
external : false
title : "Developer language classification"
tag : [Programmers, SQL]
date : 2025-01-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/276036)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 15분
2. 문제 해결 시간: 25분
3. 디버깅 시간: 10분
4. 코드 시도 횟수: 3회

## 3. Problem solving process

먼저 테이블 구조와 데이터 특성을 파악합니다. `SKILLCODES` 테이블은 각 스킬의 정보를, `DEVELOPERS` 테이블은 개발자의 스킬 정보를 비트로 저장하고 있습니다. 특히 `SKILL_CODE`가 비트 연산으로 처리되어야 한다는 점을 주목해야 합니다. 등급 분류 기준을 명확히 하여, A등급은 `Front End`와 `Python` 모두 보유, B등급은 `C#` 보유, C등급은 `Front End`만 보유로 정의됩니다. 이 조건들은 `CASE WHEN` 구문으로 구현할 수 있습니다.

비트 연산자(`&`)를 `JOIN` 조건으로 사용하여 개발자가 보유한 스킬을 확인합니다. 이는 `DEVELOPERS`와 `SKILLCODES` 테이블을 연결하는 핵심 로직입니다. `GROUP BY`를 사용하여 개발자별로 스킬을 집계하고, `COUNT`와 `CASE WHEN`을 조합하여 각 스킬 카테고리별 보유 여부를 확인합니다. `HAVING` 절로 등급이 있는 개발자만 필터링하고, `ORDER BY`로 `GRADE`와 `ID` 기준 정렬을 수행합니다.

## 4. Answer

```sql
-- 1. 개발자별 스킬 매칭 및 등급 계산을 위한 CTE 시작
WITH SKILL_COUNTS AS (
  SELECT 
    D.ID,
    D.EMAIL,
    CASE 
      -- 2-1. Front End와 Python 스킬을 모두 가진 경우 A등급
      WHEN COUNT(CASE WHEN S.CATEGORY = 'Front End' THEN 1 END) > 0 AND 
           COUNT(CASE WHEN S.NAME = 'Python' THEN 1 END) > 0 
           THEN 'A'
      -- 2-2. C# 스킬을 가진 경우 B등급
      WHEN COUNT(CASE WHEN S.NAME = 'C#' THEN 1 END) > 0 
           THEN 'B'
      -- 2-3. Front End 스킬만 가진 경우 C등급
      WHEN COUNT(CASE WHEN S.CATEGORY = 'Front End' THEN 1 END) > 0 
           THEN 'C'
    END AS GRADE
  FROM 
    DEVELOPERS D
  -- 3. 비트 연산자(&)를 사용하여 개발자가 가진 스킬 매칭
  -- SKILL_CODE와 CODE를 비트 연산하여 스킬 보유 여부 확인
  JOIN 
    SKILLCODES S ON D.SKILL_CODE & S.CODE
  -- 4. 개발자별로 스킬을 그룹화하여 집계
  GROUP BY 
    D.ID, D.EMAIL
  -- 5. 등급이 할당된 개발자만 필터링
  HAVING 
    GRADE IS NOT NULL
)
-- 6. 최종 결과 조회
SELECT 
  GRADE,
  ID,
  EMAIL
FROM 
  SKILL_COUNTS
-- 7. GRADE 먼저, 같은 GRADE 내에서는 ID 순으로 정렬
ORDER BY 
  GRADE, ID;
```

---
external : false
title : "Search front end developers"
tag : [Programmers, SQL]
date : 2025-01-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/276035)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 7분
2. 문제 해결 시간: 10분
3. 디버깅 시간: 3분
4. 코드 시도 횟수: 2회

## 3. Problem solving process

우선 개발자들의 스킬 정보가 비트 형태로 저장되어 있다는 점에 주목해야 합니다. SKILL_CODE는 2진수로 표현될 때 각 비트가 특정 스킬을 나타내며, 이는 SKILLCODES 테이블의 CODE 값과 대응됩니다.

비트 연산자 &를 활용하여 개발자가 특정 스킬을 보유하고 있는지 확인할 수 있습니다. 만약 개발자의 SKILL_CODE와 특정 스킬의 CODE를 AND 연산한 결과가 해당 스킬의 CODE와 같다면, 그 개발자는 해당 스킬을 보유하고 있다는 것을 의미합니다.

메인 쿼리에서는 DEVELOPERS 테이블에서 필요한 컬럼들을 선택하고, EXISTS 절 내부의 서브쿼리에서 Front End 카테고리에 해당하는 스킬 보유 여부를 확인합니다. 이때 카테고리가 'Front End'인 스킬들과 비트 연산을 수행하여 매칭되는 개발자를 찾습니다. 최종적으로 ID를 기준으로 오름차순 정렬하여 결과를 반환합니다.

## 4. Answer

```sql
-- 1. DEVELOPERS 테이블에서 기본 데이터를 조회
SELECT 
  d.ID,                  -- 개발자 ID
  d.EMAIL,              -- 이메일
  d.FIRST_NAME,         -- 이름
  d.LAST_NAME           -- 성
FROM 
  DEVELOPERS d          -- DEVELOPERS 테이블을 d로 별칭
WHERE 
  EXISTS (              -- 2. 존재 여부 확인 (서브쿼리가 결과를 반환하는지)
    SELECT 1
    FROM SKILLCODES s   -- 3. SKILLCODES 테이블을 s로 별칭
    WHERE 
      s.CATEGORY = 'Front End'         -- 4. Front End 카테고리 필터링
      AND (d.SKILL_CODE & s.CODE) = s.CODE  -- 5. 비트 연산으로 스킬 보유 확인
  )
ORDER BY               -- 6. 마지막으로 ID 기준 정렬
  d.ID;               -- ID 오름차순 정렬
```

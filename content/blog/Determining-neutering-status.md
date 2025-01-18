---
external : false
title : "Determining neutering status"
tag : [Programmers, SQL]
date : 2025-01-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59409)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 5분
2. 문제 해결 시간: 7분
3. 디버깅 시간: 1분
4. 코드 시도 횟수: 1회

## 3. Problem solving process

주어진 문제는 동물의 중성화 여부를 판단하여 표시하는 것이 핵심입니다. 먼저 기본적인 데이터 조회를 위해 ANIMAL_INS 테이블에서 필요한 컬럼인 ANIMAL_ID와 NAME을 선택합니다. 여기서 중요한 점은 SEX_UPON_INTAKE 컬럼의 데이터를 분석하여 중성화 여부를 판단해야 한다는 것입니다.

중성화 여부는 SEX_UPON_INTAKE 컬럼에 'Neutered' 또는 'Spayed' 문자열이 포함되어 있는지를 확인하여 판단할 수 있습니다. 이를 위해 CASE 문을 사용하며, LIKE 연산자와 와일드카드(%)를 활용하여 문자열 포함 여부를 검사합니다. 중성화된 경우 'O', 그렇지 않은 경우 'X'를 반환하도록 설계합니다.

마지막으로 문제의 요구사항대로 결과를 ANIMAL_ID를 기준으로 정렬하기 위해 ORDER BY 절을 추가합니다.

## 4. Answer

```sql
-- 동물의 아이디, 이름, 중성화 여부를 조회하는 쿼리
-- 실행 순서: FROM -> WHERE -> SELECT -> ORDER BY

SELECT 
  ANIMAL_ID,                          -- 동물 아이디 선택 (3번째 실행)
  NAME,                              -- 동물 이름 선택
  CASE 
    -- LIKE '%문자열%': 해당 문자열이 어느 위치에든 포함되어 있는지 확인
    -- %는 0개 이상의 임의의 문자를 의미함
    WHEN SEX_UPON_INTAKE LIKE '%Neutered%'  -- Neutered 문자열이 포함된 경우
      OR SEX_UPON_INTAKE LIKE '%Spayed%'    -- Spayed 문자열이 포함된 경우
      THEN 'O'                              -- 중성화된 경우 O 표시
    ELSE 'X'                                -- 중성화되지 않은 경우 X 표시
  END as '중성화'                           -- 결과 컬럼명을 '중성화'로 지정
FROM ANIMAL_INS                             -- ANIMAL_INS 테이블에서 데이터 조회 (1번째 실행)
ORDER BY ANIMAL_ID                          -- 동물 아이디 기준으로 오름차순 정렬 (마지막 실행)
```

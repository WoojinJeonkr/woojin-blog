---
external : false
title : "DATETIME to DATE"
tag : [Programmers, SQL]
date : 2025-01-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59414)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 2분
2. 문제 해결 시간: 3분
3. 디버깅 시간: 2분
4. 코드 시도 횟수: 2회

## 3. Problem solving process

문제에서 요구하는 핵심 사항은 동물의 아이디, 이름, 날짜 정보를 특정 형식으로 출력하는 것입니다. 특히 DATETIME 컬럼에서 날짜 부분만을 추출해야 합니다.

ANIMAL_INS 테이블의 구조를 보면 DATETIME 컬럼이 날짜와 시간 정보를 모두 포함하고 있습니다. 이 데이터를 원하는 형식으로 변환하기 위해 DATE_FORMAT 함수를 활용해야 합니다.

쿼리는 기본적인 SELECT 문부터 시작하여 단계적으로 구성합니다. 먼저 필요한 컬럼들을 선택하고, 그 다음 날짜 형식 변환을 추가합니다. 마지막으로 ORDER BY 절을 통해 결과를 동물 아이디 순으로 정렬합니다.

## 4. Answer

```sql
SELECT  -- 데이터 조회 시작
  ANIMAL_ID,  -- 동물 아이디 선택
  NAME,  -- 동물 이름 선택
  DATE_FORMAT(DATETIME, '%Y-%m-%d') as 날짜  -- 날짜를 YYYY-MM-DD 형식으로 변환
FROM
  ANIMAL_INS  -- ANIMAL_INS 테이블에서 데이터 가져오기
ORDER BY
  ANIMAL_ID  -- 동물 아이디 기준으로 오름차순 정렬
```

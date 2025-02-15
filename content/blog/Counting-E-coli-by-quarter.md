---
external : false
title : "Counting E coli by quarter"
tag : [Programmers, SQL]
date : 2025-02-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/299308)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간: 5분
2. 해결 시간: 7분
3. 코드 시도 횟수: 2회

## 3. Problem solving process

문제를 해결하기 위해서는 대장균 개체의 분화 날짜를 기준으로 분기를 계산하고, 각 분기별로 개체 수를 집계하는 과정이 필요합니다. 이를 위해 SQL의 QUARTER 함수를 사용하여 날짜의 월을 기반으로 분기를 결정합니다. 예를 들어, 1월에서 3월까지는 1분기, 4월부터 6월까지는 2분기, 7월부터 9월까지는 3분기, 10월부터 12월까지는 4분기로 나뉩니다.

다음으로, GROUP BY 절을 사용하여 분기별로 대장균 개체의 수를 집계합니다. 이때, QUARTER(DIFFERENTIATION_DATE)를 기준으로 그룹화하여 각 분기별로 개체 수를 계산합니다. CONCAT 함수를 사용하여 분기 앞에 'Q'를 붙여 표시합니다. 이렇게 하면 결과가 '1Q', '2Q', '3Q', '4Q'와 같은 형식으로 나타나게 됩니다.

마지막으로, ORDER BY 절을 사용하여 결과를 분기 순으로 정렬합니다.

## 4. Answer

```sql
-- 분기별로 분화된 대장균 개체의 수를 집계하는 쿼리
SELECT 
  -- 분기 번호에 'Q'를 붙여 표시
  CONCAT(QUARTER(DIFFERENTIATION_DATE), 'Q') AS QUARTER,
  -- 각 분기별 대장균 개체 수
  COUNT(ID) AS ECOLI_COUNT
FROM 
  -- 대장균 데이터 테이블
  ECOLI_DATA
-- 분기별로 그룹화
GROUP BY 
  QUARTER
-- 분기 순으로 정렬
ORDER BY 
  QUARTER
```

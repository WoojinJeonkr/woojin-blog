---
external : false
title : "Car count by type with specific options"
tag : [Programmers, SQL]
date : 2024-12-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/151137)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제에서는 특정 조건을 만족하는 데이터를 필터링하고, 자동차 종류별로 그룹화하여 자동차 수를 계산한 뒤, 결과를 정렬하는 작업이 필요합니다. 조건은 OPTIONS 컬럼에서 '통풍시트', '열선시트', '가죽시트' 중 하나 이상을 포함하는 자동차를 선택하는 것이며, 결과적으로 자동차 종류별로 몇 대가 있는지 확인해야 합니다.

테이블의 구조를 분석하여 필요한 정보를 파악하는 것이 중요합니다. 이 문제에서 핵심적으로 사용되는 컬럼은 자동차 종류를 나타내는 CAR_TYPE과 옵션 리스트를 나타내는 OPTIONS입니다. OPTIONS는 문자열 데이터로, 각 옵션이 콤마로 구분되어 저장되어 있으므로, 특정 키워드가 포함되어 있는지 확인하려면 문자열 검색을 사용해야 합니다.

필터링을 위해 OPTIONS 컬럼에 LIKE 연산자를 활용하여 조건을 작성할 수 있습니다. '통풍시트', '열선시트', '가죽시트' 중 하나라도 포함되어 있는 경우를 찾기 위해 OR로 조건을 연결합니다. 그런 다음, 조건에 맞는 데이터를 추출한 후, 자동차 종류를 기준으로 그룹화하여 각 그룹의 자동차 수를 계산합니다. 이를 위해 GROUP BY 절과 COUNT(*) 집계 함수를 사용합니다.

마지막으로 결과를 정렬하기 위해 ORDER BY 절을 추가합니다. 이 문제에서는 자동차 종류를 기준으로 오름차순 정렬이 요구되므로 CAR_TYPE ASC를 지정합니다.

## 3. Answer

```sql
-- 자동차 종류별 특정 옵션이 포함된 자동차 수를 계산하는 SQL 쿼리
SELECT 
  CAR_TYPE, -- 자동차 종류
  COUNT(*) AS CARS -- 조건을 만족하는 자동차 수
FROM 
  CAR_RENTAL_COMPANY_CAR -- 자동차 대여 회사의 자동차 정보 테이블
WHERE 
  OPTIONS LIKE '%통풍시트%' -- OPTIONS 컬럼에 '통풍시트'가 포함된 경우
  OR OPTIONS LIKE '%열선시트%' -- OPTIONS 컬럼에 '열선시트'가 포함된 경우
  OR OPTIONS LIKE '%가죽시트%' -- OPTIONS 컬럼에 '가죽시트'가 포함된 경우
GROUP BY 
  CAR_TYPE -- 자동차 종류별로 그룹화
ORDER BY 
  CAR_TYPE ASC; -- 자동차 종류를 기준으로 오름차순 정렬
```

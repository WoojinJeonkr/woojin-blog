---
external : false
title : "Classify and display order status"
tag : [Programmers, SQL]
date : 2025-01-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131113)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 3분
2. 문제 해결 시간: 7분
3. 디버깅 시간: 3분
4. 코드 시도 횟수: 3회

## 3. Problem solving process

먼저 주어진 FOOD_ORDER 테이블의 구조를 분석하여 필요한 컬럼(ORDER_ID, PRODUCT_ID, OUT_DATE)을 파악합니다.

그 다음 출고여부를 판단하기 위한 기준일자(2022-05-01)를 중심으로 조건을 나누어 생각합니다. 기준일자 이전은 '출고완료', 이후는 '출고대기', NULL값은 '출고미정'으로 처리하는 로직을 설계합니다.

이를 구현하기 위해 CASE문을 사용하되, NULL 처리는 자동으로 되도록 마지막 ELSE 절에 배치합니다. 출고일자는 DATE_FORMAT 함수를 사용하여 'YYYY-MM-DD' 형식으로 표시하고, 최종 결과는 ORDER_ID를 기준으로 오름차순 정렬하여 출력합니다.

## 4. Answer

```sql
-- 1. FOOD_ORDER 테이블에서 데이터 조회
SELECT 
  ORDER_ID,                                           -- 2. 주문 ID 선택
  PRODUCT_ID,                                         -- 3. 제품 ID 선택
  DATE_FORMAT(OUT_DATE, '%Y-%m-%d') AS OUT_DATE,     -- 4. 출고일자를 YYYY-MM-DD 형식으로 변환
  CASE                                               -- 5. 출고여부 판단
    WHEN OUT_DATE <= '2022-05-01' THEN '출고완료'    -- 5-1. 2022-05-01 이전/당일 출고건
    WHEN OUT_DATE > '2022-05-01' THEN '출고대기'     -- 5-2. 2022-05-01 이후 출고건
    ELSE '출고미정'                                  -- 5-3. OUT_DATE가 NULL인 경우
  END AS '출고여부'
FROM 
  FOOD_ORDER
ORDER BY                                             -- 6. 정렬 수행
  ORDER_ID;                                          -- 6-1. 주문 ID 기준 오름차순
```

---
external : false
title : "Integrating offline online sales data"
tag : [Programmers, SQL]
date : 2024-06-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131537)에서 확인하실 수 있습니다.

## 2. Solve

```sql
-- 온라인 판매 테이블에서 월별로 3월에 발생한 거래를 검색합니다
SELECT DATE_FORMAT(SALES_DATE, '%Y-%m-%d') AS SALES_DATE, -- 거래 날짜를 '연도-월-일' 형식으로 변환하여 출력합니다
       PRODUCT_ID, USER_ID, SALES_AMOUNT -- 제품 ID, 사용자 ID, 판매액을 선택합니다
FROM ONLINE_SALE
WHERE MONTH(SALES_DATE) = 3 -- 온라인 판매 테이블에서 3월에 발생한 거래를 선택합니다

-- UNION ALL은 두 개의 쿼리 결과를 합칩니다
-- 합치는 경우 중복 행을 포함합니다
UNION ALL

-- 오프라인 판매 테이블에서 3월에 발생한 거래를 검색합니다
SELECT DATE_FORMAT(SALES_DATE, '%Y-%m-%d') AS SALES_DATE, -- 거래 날짜를 '연도-월-일' 형식으로 변환하여 출력합니다
       PRODUCT_ID, NULL AS USER_ID, SALES_AMOUNT -- 제품 ID, 사용자 ID는 없으므로 NULL로 처리하고 판매액을 선택합니다
FROM OFFLINE_SALE
WHERE MONTH(SALES_DATE) = 3 -- 오프라인 판매 테이블에서 3월에 발생한 거래를 선택합니다

ORDER BY SALES_DATE, PRODUCT_ID, USER_ID; -- 거래 날짜, 제품 ID, 사용자 ID 순으로 정렬합니다
```

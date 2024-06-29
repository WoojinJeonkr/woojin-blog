---
external : false
title : "Long term and short term car rentals"
tag : [Programmers, SQL]
date : 2024-06-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/151138)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 이 쿼리는 자동차 렌탈 회사 대여 내역 테이블에서 정보를 가져옵니다.

SELECT 
  HISTORY_ID, -- 대여 내역 아이디
  CAR_ID,     -- 차량 아이디
  DATE_FORMAT(START_DATE, "%Y-%m-%d") AS START_DATE, -- 대여 시작일 (yyyy-mm-dd 형식)
  DATE_FORMAT(END_DATE, "%Y-%m-%d") AS END_DATE,   -- 대여 종료일 (yyyy-mm-dd 형식)
  CASE WHEN DATEDIFF(END_DATE, START_DATE) < 29 THEN '단기 대여' ELSE '장기 대여' END AS RENT_TYPE -- 대여 유형 (대여 기간 29일 미만: 단기 대여, 29일 이상: 장기 대여)
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY -- 대여 내역 테이블

WHERE START_DATE LIKE '2022-09-%' -- 2022년 9월 (월만 지정) 기간 대여 내역 필터링
ORDER BY HISTORY_ID DESC; -- 최신 대여 내역부터 정렬
```

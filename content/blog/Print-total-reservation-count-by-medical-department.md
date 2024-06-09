---
external : false
title : "Print total reservation count by medical department"
tag : [Programmers, SQL]
date : 2024-06-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/132202)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 2022년 5월에 예약된 진료과별 건수를 진료과 코드와 함께 조회합니다.
-- 진료과 코드(MCDP_CD)와 해당 진료과의 5월 예약 건수를 카운트하여 출력합니다.
SELECT MCDP_CD AS '진료과코드', COUNT(MCDP_CD) AS '5월예약건수'
FROM APPOINTMENT
-- 2022년 5월에 예약된 데이터만 필터링합니다.
WHERE APNT_YMD LIKE '2022-05%'
-- 진료과 코드(MCDP_CD)로 그룹화하고, 진료과별 예약 건수를 계산합니다.
GROUP BY MCDP_CD
-- 진료과별 예약 건수를 기준으로 오름차순 정렬하되, 동일한 건수일 경우 진료과 코드를 기준으로 오름차순 정렬합니다.
ORDER BY COUNT(MCDP_CD), MCDP_CD;
```

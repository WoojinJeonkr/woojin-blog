---
external : false
title : "List-of-cars-with-specific-option"
tag : [Programmers, SQL]
date : 2024-06-19
---

## 1. Problem

해당 문제는 여기()에서 확인이 가능합니다.

## 2. Answer

```sql
-- CAR_RENTAL_COMPANY_CAR 테이블에서
-- CAR_ID, CAR_TYPE, DAILY_FEE, OPTIONS 열을 선택합니다
SELECT CAR_ID, CAR_TYPE, DAILY_FEE, OPTIONS
FROM CAR_RENTAL_COMPANY_CAR
-- OPTIONS 열 값 중 '네비게이션'을 포함하는 행을 필터링합니다
WHERE OPTIONS LIKE '%네비게이션%'
-- CAR_ID 열을 기준으로 내림차순으로 정렬합니다
ORDER BY CAR_ID DESC;
```

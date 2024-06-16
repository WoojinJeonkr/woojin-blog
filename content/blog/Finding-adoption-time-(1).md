---
external : false
title : "Finding adoption time (1)"
tag : [Programmers, SQL]
date : 2024-06-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59412)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- ANIMAL_OUTS 테이블에서 DATETIME 필드에서 시간을 추출하여 HOUR로 명명하고, 그 시간대별로 동물이 나간 횟수를 COUNT로 세어줍니다
-- 그리고 시간대가 9부터 19 사이인 데이터만 필터링하여,
-- 시간대별로 정렬하여 결과를 반환합니다
SELECT HOUR(DATETIME) AS HOUR, COUNT(DATETIME) AS COUNT
FROM ANIMAL_OUTS
GROUP BY HOUR -- HOUR을 기준으로 결과를 그룹화합니다.
HAVING HOUR BETWEEN 9 AND 19 -- 시간대가 9에서 19 사이인 데이터만 선택합니다.
ORDER BY HOUR; -- HOUR 기준으로 오름차순으로 정렬하여 결과를 반환합니다
```

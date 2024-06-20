---
external : false
title : "Calculating number of fish caught per month"
tag : [Programmers, SQL]
date : 2024-06-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/293260)에서 확인하실 수 있습니다.

## 2. Answer

```sql
SELECT  COUNT(date_format(TIME, '%c')) as FISH_COUNT, -- 월별 잡은 물고기 수 계산
        CAST(date_format(TIME, '%c') as unsigned) as MONTH -- 월을 숫자 형식으로 변환
FROM FISH_INFO
GROUP BY MONTH -- 월별로 그룹화
ORDER BY MONTH; -- 월 순서대로 정렬
```

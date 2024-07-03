---
external : false
title : "Counting fish by species"
tag : [Programmers, SQL]
date : 2024-07-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/293257)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 각 물고기 종류별 개수 조회

-- 물고기 정보 테이블(FISH_INFO)과 물고기 이름 정보 테이블(FISH_NAME_INFO) JOIN
SELECT COUNT(F.FISH_TYPE) AS FISH_COUNT,  -- F 테이블의 FISH_TYPE 별 개수를 'FISH_COUNT' 별칭으로 사용
       FN.FISH_NAME AS FISH_NAME  -- FN 테이블의 FISH_NAME 을 'FISH_NAME' 별칭으로 사용
FROM FISH_INFO F
JOIN FISH_NAME_INFO FN
  ON F.FISH_TYPE = FN.FISH_TYPE  -- 두 테이블의 FISH_TYPE 기준으로 JOIN

-- 물고기 종류와 이름 함께 그룹화
GROUP BY F.FISH_TYPE, FISH_NAME  -- FISH_TYPE 과 FISH_NAME 을 기준으로 그룹화

-- 물고기 종류별 개수 기준으로 내림차순 정렬
ORDER BY FISH_COUNT DESC;
```

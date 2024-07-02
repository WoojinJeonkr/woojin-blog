---
external : false
title : "Count specific fish caught"
tag : [Programmers, SQL]
date : 2024-07-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/298518)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 특정 종류의 물고기 개수 세기

-- 물고기 정보 테이블(FISH_INFO)과 물고기 이름 정보 테이블(FISH_NAME_INFO) JOIN
SELECT COUNT(*) AS FISH_COUNT  -- 전체 물고기 개수를 'FISH_COUNT' 별칭으로 사용
FROM FISH_INFO F
JOIN FISH_NAME_INFO FN
  ON F.FISH_TYPE = FN.FISH_TYPE  -- 두 테이블의 FISH_TYPE 기준으로 JOIN

-- ' BASS' 또는 ' SNAPPER' 이 포함된 물고기 이름만 필터링
WHERE FN.FISH_NAME = "BASS" OR FN.FISH_NAME = "SNAPPER";
```

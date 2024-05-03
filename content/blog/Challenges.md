---
external : false
title : "Challenges"
tag : [Hackerrank, Java]
date : 2024-05-03
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/challenges/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 해커들의 아이디, 이름, 도전 과제 수를 선택합니다.
SELECT H.hacker_id, H.name, COUNT(C.challenge_id) AS total_count
-- 해커들 테이블과 도전 과제 테이블을 조인합니다.
FROM Hackers H
JOIN Challenges C ON H.hacker_id = C.hacker_id
-- 해커 아이디와 이름으로 그룹화하고, 각 해커의 도전 과제 수를 세어줍니다.
GROUP BY H.hacker_id, H.name
-- 도전 과제 수가 다음 조건 중 하나를 만족하는 경우를 선택합니다.
HAVING total_count = (
  -- 가장 많은 도전 과제 수를 가진 해커를 찾습니다.
  SELECT COUNT(temp1.challenge_id) AS max_count
  FROM challenges temp1
  GROUP BY temp1.hacker_id
  ORDER BY max_count DESC
  LIMIT 1
) OR total_count IN (
  -- 유일한 도전 과제 수를 가진 해커들을 선택합니다.
  SELECT DISTINCT other_counts
  FROM (
    -- 해커들의 아이디, 이름, 도전 과제 수를 다시 계산합니다.
    SELECT H2.hacker_id, H2.name, COUNT(C2.challenge_id) AS other_counts
    FROM Hackers H2
    JOIN Challenges C2 ON H2.hacker_id = C2.hacker_id
    GROUP BY H2.hacker_id, H2.name
  ) temp2
  -- 각 도전 과제 수가 유일한지 확인합니다.
  GROUP BY other_counts
  HAVING COUNT(other_counts) = 1
)
-- 도전 과제 수를 기준으로 내림차순으로 정렬하고, 그 후에 해커 아이디를 기준으로 오름차순으로 정렬합니다.
ORDER BY total_count DESC, H.hacker_id;
```

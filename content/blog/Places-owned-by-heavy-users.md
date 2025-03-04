---
external : false
title : "Places owned by heavy users"
tag : [Programmers, SQL]
date : 2025-03-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/77487)에서 확인하실 수 있습니다.

## 2. problem solving process

문제를 해결하기 위해 주어진 PLACES 테이블에서 각 호스트가 등록한 공간의 개수를 계산하고, 그 개수가 2개 이상인 호스트의 공간 정보를 조회해야 합니다다. 이를 위해 먼저 각 호스트별로 등록된 공간의 개수를 계산해야 합니다. 이는 GROUP BY 절을 사용하여 호스트별로 그룹화하고, COUNT 함수로 각 그룹의 공간 개수를 세는 방식으로 이루어집니다. 이후, HAVING 절을 사용하여 공간 개수가 2개 이상인 호스트만 필터링합니다.

이렇게 필터링된 호스트의 HOST_ID를 사용하여 PLACES 테이블에서 해당 호스트가 소유한 모든 공간의 정보를 조회합니다. 이를 위해 IN 연산자를 사용하여 서브쿼리에서 필터링된 HOST_ID와 일치하는 행을 선택합니다. 마지막으로, 결과를 공간의 ID 순으로 정렬하여 출력합니다.

## 3. Answer

```sql
-- 헤비 유저가 등록한 공간의 정보를 아이디 순으로 조회하는 쿼리
SELECT 
  P.ID,  -- 공간의 아이디
  P.NAME,  -- 공간의 이름
  P.HOST_ID  -- 공간을 소유한 유저의 아이디
FROM 
  PLACES P  -- PLACES 테이블을 P로 별칭 지정
WHERE 
  -- 헤비 유저(2개 이상의 공간을 등록한 호스트)의 HOST_ID를 필터링
  P.HOST_ID IN (
    SELECT 
      HOST_ID  -- 각 호스트의 아이디
    FROM 
      PLACES  -- PLACES 테이블
    GROUP BY 
      HOST_ID  -- 호스트별로 그룹화
    HAVING 
      COUNT(ID) > 1  -- 등록된 공간이 2개 이상인 호스트만 선택
  )
ORDER BY 
  P.ID;  -- 결과를 공간의 아이디 순으로 정렬
```

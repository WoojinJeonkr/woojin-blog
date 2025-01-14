---
external : false
title : "Print restaurant list by group conditions"
tag : [Programmers, SQL]
date : 2025-01-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131124?language=mysql)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 8분
2. 문제 해결 시간: 20분
3. 디버깅 시간: 15분
4. 코드 시도 횟수: 5회

## 3. Problem solving process

해당 문제는 리뷰를 가장 많이 작성한 회원을 찾고, 그 회원의 모든 리뷰를 조회하는 문제입니다. 출력 결과는 회원 이름, 리뷰 텍스트, 리뷰 작성일이며 날짜와 텍스트 기준으로 정렬해야 합니다.

가장 먼저 REST_REVIEW 테이블에서 회원별 리뷰 수를 계산하여 최다 리뷰 작성자를 찾아야 합니다. 이를 위해 서브쿼리를 중첩하여 사용합니다. 내부 서브쿼리에서 최대 리뷰 수를 찾고, 그 다음 서브쿼리에서 해당 리뷰 수와 일치하는 회원을 찾습니다.

메인 쿼리에서는 MEMBER_PROFILE과 REST_REVIEW 테이블을 조인하여 회원 정보와 리뷰 정보를 함께 가져옵니다. WHERE 절에서 앞서 찾은 최다 리뷰 작성자의 리뷰만 필터링합니다.

마지막으로 리뷰 작성일 오름차순을 주 정렬 기준으로 하고, 같은 날짜인 경우 리뷰 텍스트를 보조 정렬 기준으로 사용합니다. MySQL의 DATE_FORMAT 함수를 사용하여 날짜를 지정된 형식으로 출력합니다.

## 4. Answer

```sql
-- 1. 가장 바깥쪽 메인 쿼리: 회원 이름, 리뷰 텍스트, 리뷰 날짜를 조회
SELECT 
  MP.MEMBER_NAME, 
  RR.REVIEW_TEXT, 
  DATE_FORMAT(RR.REVIEW_DATE, '%Y-%m-%d') as REVIEW_DATE
FROM 
  MEMBER_PROFILE MP
  -- 2. MEMBER_PROFILE과 REST_REVIEW 테이블을 회원 ID로 조인
  JOIN REST_REVIEW RR ON MP.MEMBER_ID = RR.MEMBER_ID
WHERE 
  -- 3. 리뷰를 가장 많이 작성한 회원의 ID와 일치하는지 확인
  RR.MEMBER_ID IN (
    -- 4. 중첩 서브쿼리 1: 최다 리뷰 작성자의 MEMBER_ID 찾기
    SELECT 
      MEMBER_ID 
    FROM 
      REST_REVIEW 
    GROUP BY 
      MEMBER_ID 
    -- 6. 회원별 리뷰 수가 최대 리뷰 수와 같은지 비교
    HAVING 
      COUNT(*) = (
        -- 5. 중첩 서브쿼리 2: 최대 리뷰 작성 횟수 찾기
        SELECT 
          COUNT(*) cnt
        FROM 
          REST_REVIEW
        GROUP BY 
          MEMBER_ID
        ORDER BY 
          cnt DESC
        LIMIT 1
      )
  )
-- 7. 최종 결과를 리뷰 작성일 오름차순, 같은 날짜는 리뷰 텍스트 오름차순으로 정렬
ORDER BY 
  RR.REVIEW_DATE ASC, 
  RR.REVIEW_TEXT ASC;
```

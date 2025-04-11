---
external : false
title : "Conditional book and author list output using Oracle"
tag : [Programmers, SQL]
date : 2025-04-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/144854?language=oracle)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 도서 ID, 저자 이름, 출판일을 조회하는 SQL 쿼리
SELECT B.BOOK_ID AS BOOK_ID,                -- 도서 테이블의 BOOK_ID를 조회 (도서 ID)
  A.AUTHOR_NAME AS AUTHOR_NAME,             -- 저자 테이블의 AUTHOR_NAME을 조회 (저자 이름)
  TO_CHAR(B.PUBLISHED_DATE, 'YYYY-MM-DD') AS PUBLISHED_DATE -- 출판일을 'YYYY-MM-DD' 형식으로 변환하여 조회
FROM BOOK B                                 -- BOOK 테이블을 기준으로 조회
INNER JOIN AUTHOR A                         -- AUTHOR 테이블과 INNER JOIN 수행
ON B.AUTHOR_ID = A.AUTHOR_ID                -- 두 테이블을 AUTHOR_ID를 기준으로 연결 (조인 조건)
WHERE B.CATEGORY = '경제'                   -- 도서 카테고리가 '경제'인 경우만 필터링
ORDER BY PUBLISHED_DATE;                    -- 출판일 기준으로 결과를 오름차순 정렬
```

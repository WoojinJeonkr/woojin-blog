---
external : false
title : "Select conditional list of books and authors"
tag : [Programmers, SQL]
date : 2025-04-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/144854)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- BOOK 테이블에서 BOOK_ID, AUTHOR 테이블에서 AUTHOR_NAME, 
-- 그리고 BOOK 테이블에서 PUBLISHED_DATE를 'YYYY-MM-DD' 형식으로 가져옵니다.
SELECT  B.BOOK_ID AS BOOK_ID, -- 도서 ID
  A.AUTHOR_NAME AS AUTHOR_NAME, -- 저자 이름
  DATE_FORMAT(B.PUBLISHED_DATE, '%Y-%m-%d') AS PUBLISHED_DATE -- 출판일 (YYYY-MM-DD 형식)
FROM    BOOK B -- BOOK 테이블을 참조
INNER JOIN AUTHOR A -- AUTHOR 테이블과 INNER JOIN
ON      B.AUTHOR_ID = A.AUTHOR_ID -- BOOK 테이블의 AUTHOR_ID와 AUTHOR 테이블의 AUTHOR_ID를 매칭
WHERE   B.CATEGORY = "경제" -- 도서 카테고리가 '경제'인 경우만 필터링
ORDER BY PUBLISHED_DATE; -- 출판일 기준으로 정렬
```

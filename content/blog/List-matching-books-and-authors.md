---
external : false
title : "List matching books and authors"
tag : [Programmers, SQL]
date : 2024-07-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/144854)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 특정 카테고리의 도서 정보 조회

-- 도서 테이블(BOOK)과 저자 테이블(AUTHOR) JOIN
SELECT B.BOOK_ID AS BOOK_ID,  -- B 테이블의 BOOK_ID를 'BOOK_ID' 별칭으로 사용
       A.AUTHOR_NAME AS AUTHOR_NAME,  -- A 테이블의 AUTHOR_NAME을 'AUTHOR_NAME' 별칭으로 사용
       DATE_FORMAT(B.PUBLISHED_DATE, '%Y-%m-%d') AS PUBLISHED_DATE  -- B 테이블의 PUBLISHED_DATE를 '%Y-%m-%d' 형식으로 변환하여 'PUBLISHED_DATE' 별칭으로 사용 
FROM BOOK B
JOIN AUTHOR A
  ON B.AUTHOR_ID = A.AUTHOR_ID  -- 두 테이블의 AUTHOR_ID 기준으로 JOIN

-- 카테고리가 '경제'인 도서만 필터링
WHERE B.CATEGORY = "경제"  -- B 테이블의 CATEGORY가 '경제'인 데이터만 추출

-- 출판일 순으로 정렬
ORDER BY PUBLISHED_DATE;
```

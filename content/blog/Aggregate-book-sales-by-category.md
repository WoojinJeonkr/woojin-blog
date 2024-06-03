---
external : false
title : "Aggregate book sales by category"
tag : [Programmers, SQL]
date : 2024-06-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/144855)에서 확인하실 수 있습니다.

## 2. Solve

```sql
-- 2022년 1월의 각 카테고리별 총 판매액을 조회합니다.
SELECT 
  B.CATEGORY AS CATEGORY, -- 카테고리
  SUM(S.SALES) AS TOTAL_SALES -- 총 판매액
FROM 
  BOOK B -- 도서 테이블
INNER JOIN 
  BOOK_SALES S -- 도서 판매 테이블
  ON B.BOOK_ID = S.BOOK_ID -- 도서 ID를 기준으로 조인합니다.
WHERE 
  S.SALES_DATE >= '2022-01-01' AND -- 판매 날짜가 2022년 1월 1일 이상
  S.SALES_DATE < '2022-02-01' -- 2022년 2월 1일 미만인 데이터를 필터링합니다.
GROUP BY 
  CATEGORY -- 카테고리별로 그룹화합니다.
ORDER BY 
  CATEGORY; -- 카테고리별로 정렬합니다.
```

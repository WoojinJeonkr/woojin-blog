---
external : false
title : "Author category sales summary"
tag : [Programmers, SQL]
date : 2025-01-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/144856)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 5분
2. 문제 해결 시간: 8분
3. 디버깅 시간: 2분
4. 코드 시도 횟수: 1회

## 3. Problem solving process

문제를 해결하기 위해서는 먼저 매출액 계산의 핵심 요소인 판매량과 판매가를 확인해야 합니다. 판매량은 BOOK_SALES 테이블에서, 판매가는 BOOK 테이블에서 가져올 수 있으므로 이 두 테이블의 조인이 필수적입니다. 여기에 저자 정보를 연결하기 위해 AUTHOR 테이블까지 총 세 개의 테이블을 조인해야 합니다.

매출액 계산을 위해서는 각 도서의 판매량과 판매가를 곱한 후 이를 저자와 카테고리별로 합산해야 합니다. 이때 2022년 1월이라는 기간 조건을 WHERE 절에서 처리하고, GROUP BY를 통해 저자와 카테고리별로 데이터를 그룹화합니다.

마지막으로 정렬 조건을 보면 저자 ID는 오름차순, 동일한 저자 ID 내에서는 카테고리를 내림차순으로 정렬해야 하므로, ORDER BY 절에서 이 두 가지 조건을 순서대로 적용합니다.

## 4. Answer

```sql
/* 
  실행 순서:
  1. FROM 절: 테이블 조인
  2. WHERE 절: 날짜 필터링
  3. GROUP BY 절: 저자와 카테고리별 그룹화
  4. SELECT 절: 필요한 컬럼 선택 및 계산
  5. ORDER BY 절: 결과 정렬
*/

SELECT 
  A.AUTHOR_ID,                         /* 저자 ID */
  A.AUTHOR_NAME,                       /* 저자명 */
  B.CATEGORY,                          /* 카테고리 */
  SUM(BS.SALES * B.PRICE) AS TOTAL_SALES  /* 총 매출액 = 판매량 * 판매가 */
FROM 
  AUTHOR A
  JOIN BOOK B                          /* AUTHOR와 BOOK 테이블을 저자 ID로 조인 */
    ON A.AUTHOR_ID = B.AUTHOR_ID
  JOIN BOOK_SALES BS                   /* BOOK과 BOOK_SALES 테이블을 도서 ID로 조인 */
    ON B.BOOK_ID = BS.BOOK_ID
WHERE 
  BS.SALES_DATE BETWEEN '2022-01-01' AND '2022-01-31'  /* 2022년 1월 데이터만 필터링 */
GROUP BY 
  A.AUTHOR_ID,                         /* 저자 ID로 그룹화 */
  A.AUTHOR_NAME,                       /* 저자명으로 그룹화 */
  B.CATEGORY                           /* 카테고리로 그룹화 */
ORDER BY 
  A.AUTHOR_ID ASC,                     /* 저자 ID 오름차순 정렬 */
  B.CATEGORY DESC                      /* 카테고리 내림차순 정렬 */
```

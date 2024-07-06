---
external : false
title : "Retrieve users and total sales"
tag : [Programmers, SQL]
date : 2024-07-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/164668)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- 판매 완료된 중고 물품 판매자 정보 조회 (최소 판매 금액 이상)

-- 중고 물품 게시판 테이블(USED_GOODS_BOARD)과 판매자 정보 테이블(USED_GOODS_USER) JOIN
SELECT B.USER_ID AS USER_ID,  -- B 테이블의 USER_ID를 'USER_ID' 별칭으로 사용
       B.NICKNAME AS NICKNAME,        -- B 테이블의 NICKNAME을 'NICKNAME' 별칭으로 사용
       SUM(A.PRICE) AS TOTAL_SALES  -- A 테이블의 PRICE 합계를 'TOTAL_SALES' 별칭으로 사용
FROM USED_GOODS_BOARD A
JOIN USED_GOODS_USER B
  ON A.WRITER_ID = B.USER_ID  -- 두 테이블의 WRITER_ID 기준으로 JOIN

-- 판매 상태가 'DONE' (판매 완료) 인 데이터만 필터링  
WHERE A.STATUS = 'DONE'

-- 사용자별로 판매 금액을 합계하여 그룹화
GROUP BY B.USER_ID  -- B 테이블의 USER_ID 별로 그룹화

-- 총 판매 금액이 700,000 이상인 사용자만 추출 (HAVING 절)
HAVING TOTAL_SALES >= 700000  -- 총_판매_금액 합계가 700,000 이상인 데이터만 필터링  

-- 총 판매 금액 순으로 정렬
ORDER BY TOTAL_SALES;   
```

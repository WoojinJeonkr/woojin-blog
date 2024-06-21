---
external : false
title : "Retrieve user information that meets conditions"
tag : [Programmers, SQL]
date : 2024-06-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/164670)에서 확인하실 수 있습니다.

## 2. Answer

```sql
SELECT U.USER_ID AS USER_ID, -- 사용자 ID를 선택하고 USER_ID로 표시
  U.NICKNAME AS NICKNAME, -- 닉네임을 선택하고 NICKNAME으로 표시
  CONCAT(U.CITY, ' ', U.STREET_ADDRESS1, ' ', U.STREET_ADDRESS2) AS 전체주소, -- 도시, 첫 번째 거리 주소, 두 번째 거리 주소를 결합하여 전체주소로 표시
  CONCAT(SUBSTRING(U.TLNO, 1, 3), '-', SUBSTRING(U.TLNO, 4, 4), '-', SUBSTRING(U.TLNO, 8)) AS 전화번호 -- 전화번호를 특정 형식으로 결합하여 전화번호로 표시
FROM USED_GOODS_USER U -- USED_GOODS_USER 테이블에서 U로 별칭 지정
JOIN USED_GOODS_BOARD B ON U.USER_ID = B.WRITER_ID -- USED_GOODS_BOARD 테이블과 U.USER_ID를 B.WRITER_ID로 조인
GROUP BY USER_ID -- 사용자 ID별로 그룹화
HAVING COUNT(B.WRITER_ID) >= 3 -- 게시글 작성자가 3명 이상인 그룹만 선택
ORDER BY USER_ID DESC; -- 사용자 ID를 내림차순으로 정렬
```

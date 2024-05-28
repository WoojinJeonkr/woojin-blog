---
external : false
title : "Search for comments meeting criteria in used sales"
tag : [Programmers, SQL]
date : 2024-05-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/164673)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- USED_GOODS_REPLY 테이블의 작성일(UR.CREATED_DATE)을
-- 'YYYY-MM-DD' 형식으로 변환한 후, 'CREATED_DATE' 별칭으로 지정합니다
SELECT UB.TITLE, UB.BOARD_ID,
       UR.REPLY_ID, UR.WRITER_ID,
       UR.CONTENTS, DATE_FORMAT(UR.CREATED_DATE, '%Y-%m-%d') AS CREATED_DATE
FROM USED_GOODS_BOARD AS UB
JOIN USED_GOODS_REPLY AS UR
    ON UB.BOARD_ID = UR.BOARD_ID
-- USED_GOODS_BOARD 테이블의 작성일이 '2022년 10월'인 데이터만 필터링합니다
WHERE SUBSTR(UB.CREATED_DATE, 1, 7) = '2022-10'
-- 결과를 중고물품 댓글 작성일 순으로 정렬하고,
-- 동일한 작성일의 경우 게시글 제목을 기준으로 정렬합니다
ORDER BY UR.CREATED_DATE, UB.TITLE;
```

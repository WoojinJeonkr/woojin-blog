---
external : false
title : "Retrieve matching used goods status"
tag : [Programmers, SQL]
date : 2024-06-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/164672)에서 확인하실 수 있습니다.

## 2. Answer

```sql
SELECT BOARD_ID, WRITER_ID, TITLE, PRICE, 
  CASE 
    WHEN STATUS = 'SALE' THEN '판매중'  -- 상태가 'SALE'인 경우 '판매중'으로 변환
    WHEN STATUS = 'RESERVED' THEN '예약중'  -- 상태가 'RESERVED'인 경우 '예약중'으로 변환
    WHEN STATUS = 'DONE' THEN '거래완료'  -- 상태가 'DONE'인 경우 '거래완료'로 변환
  END STATUS
FROM USED_GOODS_BOARD
WHERE BOARD_ID IN 
  (SELECT BOARD_ID FROM USED_GOODS_BOARD WHERE CREATED_DATE = '2022-10-05')  -- 생성일이 '2022-10-05'인 게시물의 BOARD_ID를 검색
ORDER BY BOARD_ID DESC  -- BOARD_ID를 내림차순으로 정렬
```

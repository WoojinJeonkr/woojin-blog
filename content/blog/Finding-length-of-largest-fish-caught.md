---
external : false
title : "Finding length of largest fish caught"
tag : [Programmers, SQL]
date : 2024-06-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/298515)에서 확인하실 수 있습니다.

## 2. Answer

```sql
-- FISH_INFO 테이블에서 잡은 물고기 중 가장 큰 물고기의 길이를 'cm' 를 붙여 출력한다
SELECT CONCAT(MAX(LENGTH), 'cm') AS MAX_LENGTH -- 가장 큰 물고기의 길이를 구하고 'cm'를 붙인 뒤 컬럼명을 MAX_LENGTH로 명명
FROM FISH_INFO; -- FISH_INFO 테이블에서
```

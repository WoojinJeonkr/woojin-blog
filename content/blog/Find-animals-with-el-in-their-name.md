---
external : false
title : "Find animals with el in their name"
tag : [Programmers, SQL]
date : 2024-06-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/59047)에서 확인하실 수 있습니다.

## 2. Solve

```sql
-- 동물 보호소에 들어온 동물 이름 중, 이름에 "EL"이 들어가는 개의 아이디와 이름을 조회한다
SELECT ANIMAL_ID, NAME -- 아이디, 이름 선택
FROM ANIMAL_INS -- ANIMAL_INS 테이블에서
WHERE NAME LIKE '%EL%' AND ANIMAL_TYPE = "Dog" -- 동물 유형(Dog, Cat)이 Dog이고 이름에 EL이 들어가는 데이터 필터링
ORDER BY NAME; -- 이름을 기준으로 오름차순 정렬
```

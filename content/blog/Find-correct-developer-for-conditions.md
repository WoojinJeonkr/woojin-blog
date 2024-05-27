---
external : false
title : "Find correct developer for conditions"
tag : [Programmers, SQL]
date : 2024-05-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/276034)에서 확인하실 수 있습니다.

## 2. Solve

```sql
-- DEVELOPERS 테이블에서 ID, EMAIL, FIRST_NAME, LAST_NAME 열을 선택합니다.
SELECT ID, EMAIL, FIRST_NAME, LAST_NAME FROM DEVELOPERS
-- WHERE 절에서는 SKILL_CODE 열의 비트 연산을 통해 필터링합니다.
-- SKILLCODES 테이블에서 'Python' 또는 'C#'의 코드를 가져와서 비트 연산을 수행합니다.
-- 이 비트 연산 결과가 0이 아닌 레코드를 선택합니다.
WHERE SKILL_CODE & (SELECT CODE FROM SKILLCODES WHERE NAME = 'Python')
    OR SKILL_CODE & (SELECT CODE FROM SKILLCODES WHERE NAME = 'C#')
-- ID를 기준으로 오름차순으로 결과를 정렬합니다.
ORDER BY ID;
```

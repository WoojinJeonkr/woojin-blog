---
external : false
title : "Fish count by year"
tag : [Programmers, SQL]
date : 2025-02-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/298516)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간(문제 확인 ~ 첫 쿼리 작성 시점): 3분
2. 해결 시간(첫 쿼리 시도 ~ 문제 정답 확인): 3분
3. 코드 시도 횟수: 1회

## 3. Problem solving process

이 문제는 주어진 FISH_INFO 테이블에서 특정 연도의 데이터만 추출하여 개수를 세는 것이 핵심입니다. TIME 컬럼에서 연도 정보만 추출하기 위해 YEAR 함수를 사용하며, 이를 WHERE 절에서 2021과 비교하여 해당 연도의 데이터만 필터링합니다.

물고기의 길이가 10cm 이하인 경우 LENGTH 값이 NULL로 저장된다는 조건이 주어졌지만, 이는 실제 쿼리 작성에 영향을 주지 않습니다. 문제에서 요구하는 것은 단순히 2021년에 잡은 모든 물고기의 수이므로, NULL 값을 포함한 모든 레코드를 세어야 합니다. 따라서 COUNT(*) 함수를 사용하여 NULL 값을 포함한 모든 레코드를 집계합니다.

결과 컬럼의 이름을 'FISH_COUNT'로 지정해야 한다는 요구사항은 AS 키워드를 사용하여 해결할 수 있습니다. 이렇게 작성된 쿼리는 2021년에 잡힌 모든 물고기의 수를 정확하게 집계하여 반환합니다.

## 4. Answer

```sql
-- 잡은 물고기의 총 개수를 세어 FISH_COUNT라는 별칭으로 조회합니다
SELECT COUNT(*) AS FISH_COUNT
-- FISH_INFO 테이블에서 데이터를 가져옵니다
FROM FISH_INFO
-- TIME 컬럼의 연도가 2021년인 데이터만 필터링합니다
WHERE YEAR(TIME) = 2021;
```

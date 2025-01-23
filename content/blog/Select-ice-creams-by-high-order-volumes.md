---
external : false
title : "Select ice creams by high order volumes"
tag : [Programmers, SQL]
date : 2025-01-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/133027)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 5분
2. 문제 해결 시간: 9분
3. 디버깅 시간: 2분
4. 코드 시도 횟수: 1회

## 3. Problem solving process

아이스크림 주문량을 분석하기 위해 먼저 테이블 구조를 자세히 살펴보았습니다. 상반기 주문 정보가 담긴 FIRST_HALF 테이블과 7월 주문 정보가 담긴 JULY 테이블이 있는데, 특히 7월에는 같은 맛의 아이스크림이라도 여러 공장에서 출하될 수 있어 중복된 FLAVOR가 존재할 수 있다는 점에 주목했습니다.

우선 7월의 중복된 주문량을 처리하기 위해 JULY 테이블의 데이터를 FLAVOR별로 그룹화하여 총 주문량을 계산하는 서브쿼리를 작성합니다. 이렇게 정리된 7월 데이터를 FIRST_HALF 테이블과 연결해야 하는데, 이때 7월에 주문이 없는 맛도 포함해야 하므로 LEFT JOIN을 사용합니다.

또한 7월에 주문이 없는 경우 NULL 값이 발생할 수 있으므로, COALESCE 함수를 사용하여 이를 0으로 처리함으로써 정확한 합계를 계산합니다. 최종적으로 상반기와 7월의 주문량을 합산하여 내림차순으로 정렬한 뒤, 상위 3개의 맛만 선택하여 문제에서 요구하는 결과를 도출해냅니다.

## 4. Answer

```sql
-- 실행 순서: 4) 최종 결과에서 FLAVOR 컬럼만 선택
SELECT 
  f.FLAVOR
FROM 
  -- 실행 순서: 1) FIRST_HALF 테이블을 기준으로
  FIRST_HALF f
  -- 실행 순서: 2) JULY 테이블의 맛별 총합과 LEFT JOIN
  LEFT JOIN (
    SELECT 
      FLAVOR, 
      SUM(TOTAL_ORDER) as JULY_TOTAL
    FROM 
      JULY
    GROUP BY 
      FLAVOR
  ) j ON f.FLAVOR = j.FLAVOR
-- 실행 순서: 3) 상반기와 7월 주문 합계로 내림차순 정렬 후 상위 3개 선택
ORDER BY 
  (f.TOTAL_ORDER + COALESCE(j.JULY_TOTAL, 0)) DESC
LIMIT 
  3
```

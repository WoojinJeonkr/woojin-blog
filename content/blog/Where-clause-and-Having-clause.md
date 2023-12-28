---
external: false
title: "Where clause and Having clause"
date: 2023-11-13
---

## 1. Where절과 Having절의 차이

WHERE절은 개별 행에 대한 조건을 지정하는 데 사용되고, HAVING절은 그룹화된 결과에 대한 조건을 지정하는 데 사용됩니다.

## 2. 잘못된 예제

```sql
SELECT * FROM 테이블명
WHERE COUNT(컬럼명) >= 3;
```

일반적으로 WHERE 절은 행의 조건을 지정하는 데 사용되며, 집계 함수를 직접적으로 사용하는 것은 허용되지 않습니다. 집계 함수는 전체 결과 집합에 대한 단일 값을 계산하는 데 사용되므로 특정 행의 조건을 지정하는 WHERE 절에서는 그것을 사용할 수 없습니다.

## 3. 올바른 예제

```sql
SELECT 컬럼명, COUNT(컬럼명) AS 갯수
FROM 테이블명
GROUP BY 컬럼명
HAVING COUNT(컬럼명) >= 3;
```

HAVING 절을 사용하여 그룹화된 결과에서 조건을 지정함으로써 집계 함수를 사용하여 특정 그룹 또는 전체 테이블에 대한 집계 결과를 비교하는 것은 가능합니다.

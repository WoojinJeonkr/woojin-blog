---
external : false
title : "SQL problem"
tag : [SQL]
date : 2025-04-03
---

## 1. Problem

다음 SQL의 결과는?

```sql
SELECT 
  a.flag AS aflag, 
  b.flag AS bflag,
  CASE 
    WHEN a.flag = 'Y' OR b.flag = 'Y' THEN 'Y' 
    ELSE 'N' 
  END AS coll
FROM (
  SELECT CASE 
    WHEN MAX('Y') IS NULL THEN 'N' 
    ELSE MAX('Y') 
  END AS flag 
  FROM dual 
  WHERE 1=0  -- 항상 거짓인 조건
) a,
(
  SELECT CASE 
    WHEN MAX('Y') IS NULL THEN 'N' 
    ELSE MAX('Y') 
  END AS flag 
  FROM dual 
  WHERE 1=1  -- 항상 참인 조건
) b;
```

## 2. Answer

| aflag | bflag | coll |
|-------|-------|------|
| N     | Y     | Y    |

## 3. 설명

1. `aflag`: 서브쿼리 `a`의 결과로, 항상 거짓 조건(`WHERE 1=0`)으로 인해 `MAX('Y')`는 `NULL`이 됩니다. 따라서 `'N'`이 반환됩니다.
2. `bflag`: 서브쿼리 `b`의 결과로, 항상 참 조건(`WHERE 1=1`)으로 인해 `MAX('Y')`는 `'Y'`가 됩니다.
3. `coll`: 메인 쿼리에서 조건 `a.flag = 'Y' OR b.flag = 'Y'`를 평가한 결과, `b.flag = 'Y'`이므로 최종적으로 `'Y'`가 반환됩니다.

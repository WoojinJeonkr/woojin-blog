---
external: false
title: "SQL Practice 12"
date: 2023-08-08
---

## 1. 문제 [[HACKKERRANK BASIC Weather Observation Station 12](https://www.hackerrank.com/challenges/weather-observation-station-12/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen)]

STATION 테이블이 다음과 같다고 할 때, 테이블에서 모음으로 시작하지 않고 모음으로 끝나지 않는 CITY 이름 목록을 쿼리합니다.
결과는 중복을 포함할 수 없습니다.

| Field  | Type         |
|--------|--------------|
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |

## 2. 정답

```sql
SELECT DISTINCT CITY
FROM STATION
WHERE 
  LEFT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U') 
  AND RIGHT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U')
```

### 02-1. DISTINCT

```sql
SELECT DISTICT CITY FROM STATION
```

STATION 테이블에서 CITY를 선택하지만 중복을 허용하지 않는다.

### 02-2. LEFT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U')

```sql
WHERE LEFT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U')
```

선택된 데이터의 첫 문자가 'A', 'E', 'I', 'O', 'U'가 아닌 데이터를 선택한다.

### 02-3. RIGHT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U')

```sql
RIGHT(CITY,1) NOT IN ('A', 'E', 'I', 'O', 'U')
```

선택한 데이터의 끝에서 첫 번째 문자가 'A', 'E', 'I', 'O', 'U'가 아닌 데이터를 선택한다.

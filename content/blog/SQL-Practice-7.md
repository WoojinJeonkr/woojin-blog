---
external: false
title: "SQL Practice 7"
date: 2023-08-01
---

## 1. 문제 [[SQL Practice (Difficult: Easy) 8번](https://www.sql-practice.com/)]

출생 연도가 2010년인 birth_date가 있는 환자 수를 표시합니다.

| patient_id | first_name | last_name   | gender | birth_date | city       | province_id | allergies   | height | weight |
|------------|------------|-------------|--------|------------|------------|-------------|-------------|--------|--------|
| 301        | Ricardo    | Andrews     | M      | 1987-07-21 | Hamilton   | ON          | NULL        | 177    | 112    |
| 302        | Paul       | Vondopoulos | M      | 2010-05-22 | Brantford  | ON          | NULL        | 107    | 36     |
| 303        | Agnes      | Parkinson   | F      | 1975-01-11 | Hamilton   | ON          | Sulfa Drugs | 158    | 47     |
| 304        | Jeffrey    | Pascoe      | M      | 1957-05-12 | Hamilton   | ON          | Sulfa       | 174    | 84     |
| 305        | Amane      | Flute       | F      | 2006-03-27 | Hamilton   | ON          | NULL        | 130    | 48     |
| 306        | Matt       | Franchetti  | M      | 2007-09-25 | Burlington | ON          | Milk        | 157    | 60     |

## 2. 정답

```sql
SELECT COUNT(*) as total_patients
From patients
where YEAR(birth_date) = 2010;
```

## 3. 결과

| total_patients |
|----------------|
| 1              |

## 4. YEAR, MONTH, DAY 함수 사용법

```sql
SELECT YEAR(GETDATE()) AS [YEAR] -- 년
SELECT MONTH(GETDATE()) AS [MONTH] -- 월
SELECT DAY(GETDATE()) AS [DAY] -- 일
```

여기서 주의해야 할 점은 위의 SQL의 반환값이 문자열이 아닌 정수라는 점이다.

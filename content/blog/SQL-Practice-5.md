---
external: false
title: "SQL Practice 5"
date: 2023-07-31
---

## 1. 문제 [[SQL Practice (Difficult: Easy) 6번](https://www.sql-practice.com/)]

이름과 성을 하나의 열로 연결하여 전체 이름을 표시합니다.

| patient_id | first_name | last_name  | gender | birth_date | city     | province_id | allergies  | height | weight |
|------------|------------|------------|--------|------------|----------|-------------|------------|--------|--------|
| 1          | Donald     | Waterfield | M      | 1963-02-12 | Barrie   | ON          | NULL       | 156    | 65     |
| 2          | Mickey     | Baasha     | M      | 1981-05-28 | Dundas   | ON          | Sulfa      | 185    | 76     |
| 3          | Jiji       | Sharma     | M      | 1957-09-05 | Hamilton | ON          | Penicillin | 194    | 106    |
| 4          | Blair      | Diaz       | M      | 1967-01-07 | Hamilton | ON          | NULL       | 191    | 104    |
| 5          | Charles    | Wolfe      | M      | 2017-11-19 | Orillia  | ON          | Penicillin | 47     | 10     |
| 6          | Sue        | Falcon     | F      | 2017-09-30 | Ajax     | ON          | Penicillin | 43     | 5      |

## 2. 정답

```sql
SELECT
  CONCAT(first_name, ' ', last_name) AS full_name
FROM patients;
```

## 3. 다른 정답

```sql
SELECT first_name || ' ' || last_name
FROM patients;
```

## 4. 결과

| full_name         |
|-------------------|
| Donald Waterfield |
| Mickey Baasha     |
| Jiji Sharma       |
| Blair Diaz        |
| Charles Wolfe     |
| Sue Falcon        |

## 5. CONCAT 구문 형태

```sql
SELECT CONCAT(컬럼명 1, (두 데이터를 이어줄 기호, ex. " "), 컬럼명 2) AS (두 값을 합한 데이터의 컬럼명) FROM 테이블 명
```

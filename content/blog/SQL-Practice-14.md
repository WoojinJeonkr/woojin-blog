---
external: false
title: "SQL Practice 14"
date: 2023-08-12
---

## 1. 문제 [[SQL Practice (Difficult: Medium) 02번](https://www.sql-practice.com/)]

목록에서 한 번만 나타나는 환자 테이블의 고유한 이름을 표시합니다.

예를 들어 두 명 이상의 사람이 first_name 열에 'John'이라는 이름이 있는 경우 출력 목록에 해당 이름을 포함하지 마십시오. 이름이 'Leo'인 사람이 한 명뿐인 경우 출력에 포함합니다.

| patient_id | first_name | last_name  | gender | birth_date | city     | province_id | allergies  | height | weight |
|------------|------------|------------|--------|------------|----------|-------------|------------|--------|--------|
| 1          | Donald     | Waterfield | M      | 1963-02-12 | Barrie   | ON          | NULL       | 156    | 65     |
| 2          | Mickey     | Baasha     | M      | 1981-05-28 | Dundas   | ON          | Sulfa      | 185    | 76     |
| 3          | Mickey     | Sharma     | M      | 1957-09-05 | Hamilton | ON          | Penicillin | 194    | 106    |
| 4          | Blair      | Diaz       | M      | 1967-01-07 | Hamilton | ON          | NULL       | 191    | 104    |
| 5          | Charles    | Wolfe      | M      | 2017-11-19 | Orillia  | ON          | Penicillin | 47     | 10     |
| 6          | Donald     | Falcon     | F      | 2017-09-30 | Ajax     | ON          | Penicillin | 43     | 5      |

## 2. 정답

```sql
SELECT first_name FROM patients
group by first_name
having COUNT(first_name) = 1;
```

## 3. 다른 정답

```sql
SELECT first_name
FROM (
    SELECT
      first_name,
      count(first_name) AS occurrencies
    FROM patients
    GROUP BY first_name
  )
WHERE occurrencies = 1
```

## 4. 결과

| first_name |
|------------|
| Blair      |
| Charles    |

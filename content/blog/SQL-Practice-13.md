---
external: false
title: "SQL Practice 13"
date: 2023-08-11
---

## 1. 문제 [[SQL Practice (Difficult: Medium) 01번](https://www.sql-practice.com/)]

환자의 고유한 출생 연도를 표시하고 오름차순으로 정렬합니다.

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
SELECT DISTINCT YEAR(birth_date) AS birth_year
FROM patients
order by birth_date ASC;
```

## 3. 결과

| birth_year |
|------------|
| 1957       |
| 1963       |
| 1967       |
| 1981       |
| 2017       |

---
external: false
title: "SQL Practice 10"
date: 2023-08-04
---

## 1. 문제 [[SQL Practice (Difficult: Easy) 15번](https://www.sql-practice.com/)]

키가 160 이상이고 몸무게가 70 이상인 환자의 이름, 성, 생년월일을 찾는 쿼리를 작성하세요

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
SELECT first_name, last_name, birth_date 
FROM patients 
where height > 160 and weight > 70;
```

## 3. 결과

| first_name | last_name | birth_date |
|------------|-----------|------------|
| Mickey     | Baasha    | 1981-05-28 |
| Jiji       | Sharma    | 1957-09-05 |
| Blair      | Diaz      | 1967-01-07 |

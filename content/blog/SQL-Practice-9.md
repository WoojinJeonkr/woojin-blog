---
external: false
title: "SQL Practice 9"
date: 2023-08-03
---

## 1. 문제 [[SQL Practice (Difficult: Easy) 14번](https://www.sql-practice.com/)]

환자가 거주하는 도시를 기준으로, province_id가 'NS'인 도시를 표시하시오.

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
SELECT DISTINCT(city) AS unique_cities
FROM patients
WHERE province_id = 'NS';
```

## 3. 다른 정답

```sql
SELECT city
FROM patients
GROUP BY city
HAVING province_id = 'NS';
```

## 4. 결과

| unique_cities |
| ------------- |
| Hamilton      |
| Brantford     |
| Burlington    |

---
external: false
title: "SQL Practice 11"
date: 2023-08-07
---

## 1. 문제 [[SQL Practice (Difficult: Easy) 17번](https://www.sql-practice.com/)]

환자가 거주하는 도시를 기준으로 모음(a, e, i, o, u)으로 시작하는 고유한 도시 목록을 표시하는 쿼리를 작성하시오.
결과 순서는 도시별로 오름차순으로 표시합니다.

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
select distinct city
from patients
where city like 'a%'
  or city like 'e%'
  or city like 'i%'
  or city like 'o%'
  or city like 'u%'
order by city;
```

## 3. 결과

| first_name |
|------------|
| Ajax       |
| Barrie     |
| Dundas     |
| Hamilton   |
| Orillia    |

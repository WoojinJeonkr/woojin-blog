---
external: false
title: "SQL Practice 6"
date: 2023-08-01
---

## 1. 문제 [[SQL Practice (Difficult: Easy) 7번](https://www.sql-practice.com/)]

각 환자의 이름, 성 및 전체 주 이름을 표시합니다.

예: 'ON' 대신 'Ontario'

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
SELECT first_name, last_name, province_names.province_name
FROM patients, province_names
WHERE patients.province_id = province_names.province_id;
```

## 3. 다른 정답

```sql
SELECT first_name, last_name, province_name
FROM patients
JOIN province_names ON province_names.province_id = patients.province_id;
```

## 4. 결과

| first_name | last_name  | province_name |
|------------|------------|---------------|
| Donald     | Waterfield | Ontario       |
| Mickey     | Baasha     | Ontario       |
| Jiji       | Sharma     | Ontario       |
| Blair      | Diaz       | Ontario       |
| Charles    | Wolfe      | Ontario       |
| Sue        | Falcon     | Ontario       |

## 5. OUTER JOIN 관계 한 눈에 보기

![OUTER JOIN](https://hongong.hanbit.co.kr/wp-content/uploads/2021/11/OUTER-JOIN_%EB%8D%94%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-1.png)

이미지 출처: [SQL 기본 문법: JOIN(INNER, OUTER, CROSS, SELF JOIN)](https://hongong.hanbit.co.kr/sql-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-joininner-outer-cross-self-join/)

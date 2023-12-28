---
external: false
title: "SQL Fiddle 3"
date: 2023-08-01
---

## 1. 문제 [정보처리기사 실기 2022년 2회 12번]

다음 테이블에서 πTTL(employee)에 대한 연산 결과 값을 작성하시오.

| Index | AGE | TTL  |
|-------|-----|------|
| 1     | 55  | 부장 |
| 2     | 35  | 대리 |
| 3     | 42  | 과장 |
| 4     | 45  | 차장 |

## 2. 정답

```textile
TTL
부장
대리
과장
차장
```

## 3. SQL 실행 순서

[SQL Fiddle](http://sqlfiddle.com/)에서 SQL 문법을 작성하고 결과를 확인할 수 있습니다.

### 3-1. 테이블 생성

```sql
CREATE TABLE employee(
  ID int not null auto_increment primary key,
  AGE int null,
  TTL varchar(32) null);
```

### 3-2. 데이터 추가

```sql
INSERT INTO employee(AGE, TTL) VALUES (55, '부장');
INSERT INTO employee(AGE, TTL) VALUES (35, '대리');
INSERT INTO employee(AGE, TTL) VALUES (42, '과장');
INSERT INTO employee(AGE, TTL) VALUES (45, '차장');
```

### 3-3. 데이터 조회

```textile
π(project): 주어진 테이블에서 속성 컬럼에 제시된 속성 값만을 추출하여 새로운 테이블을 만듭니다. 이때 연산 결과에 중복이 발생하면 중복이 제거됩니다.

표기 방법: π(속성 컬럼명)(테이블 명)
```

```sql
SELECT TTL FROM employee;
```

### 3-4. 결과

| TTL  |
|------|
| 부장 |
| 대리 |
| 과장 |
| 차장 |

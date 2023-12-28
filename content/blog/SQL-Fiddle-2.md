---
external: false
title: "SQL Fiddle 2"
date: 2023-07-25
---

## 1. 문제 [정보처리기사 실기 2022년 2회 4번]

다음 SQL 결과에 알맞는 답을 작성하시오.

|   Index   |   Col1   |   Col2   |
| --------- | -------- | -------- |
| 1         | 2        | Null     |
| 2         | 3        | 6        |
| 3         | 5        | 5        |
| 4         | 6        | 3        |
| 5         | Null     | 3        |

```sql
SELECT count(col2)
FROM TABLE
WHERE col1 in(2,3) or col2 in(3,5);
```

## 2. 정답

```textile
4
```

## 3. SQL 실행 순서

[SQL Fiddle](http://sqlfiddle.com/)에서 SQL 문법을 작성하고 결과를 확인할 수 있습니다.

### 3-1. 테이블 생성

```sql
CREATE TABLE TEST(
  ID int not null auto_increment primary key,
  Col1 int null,
  Col2 int null);
```

### 3-2. 데이터 추가

```sql
INSERT INTO TEST(Col1) values (2);
INSERT INTO TEST(Col1, Col2) values (3, 6);
INSERT INTO TEST(Col1, Col2) values (5, 5);
INSERT INTO TEST(Col1, Col2) values (6, 3);
INSERT INTO TEST(Col2) values (3);
```

### 3-3. 데이터 조회

```sql
SELECT count(col2)
FROM TEST
WHERE col1 in(2,3) or col2 in(3,5);
```

### 3-4. 결과

|   count(col2)   |
| --------------- |
| 4               |

---
external: false
title: "SQL Fiddle 1"
date: 2023-07-24
---

## 1. 문제 [정보처리기사 실기 2022년 2회 3번]

H회사의 전체 제품 단가 보다 큰 제품 출력을 하고자 한다. 괄호안에 들어갈 알맞는 용어를 작성하시오.

| 제조사 |   제품명   | 단가 |
| ------ | ---------- | ---- |
|    A   |    과자    | 1000 |
|    B   |   초콜릿   | 6000 |
|    H   |    사탕    | 2000 |
|    C   | 아이스크림 | 5000 |
|    H   |    사탕    | 3000 |

```sql
SELECT 제조사, 제품명, 단가
FROM 제품
WHERE 단가 > (     ) (SELECT 단가 FROM 제품 WHERE 제조사='H')
```

## 2. 정답

```textile
ALL
```

## 3. SQL 실행 순서

[SQL Fiddle](http://sqlfiddle.com/)에서 SQL 문법을 작성하고 결과를 확인할 수 있습니다.

### 3-1. 테이블 생성

```sql
CREATE TABLE 제품(
  제조사 varchar(1) null,
  제품명 varchar(32) null,
  단가 int null);
```

### 3-2. 데이터 추가

```sql
INSERT INTO 제품(제조사, 제품명, 단가) values ('A', '과자', 1000);
INSERT INTO 제품(제조사, 제품명, 단가) values ('B', '초콜릿', 6000);
INSERT INTO 제품(제조사, 제품명, 단가) values ('H', '사탕', 2000);
INSERT INTO 제품(제조사, 제품명, 단가) values ('C', '아이스크림', 5000);
INSERT INTO 제품(제조사, 제품명, 단가) values ('H', '사탕', 3000);
```

### 3-3. 데이터 조회

```sql
SELECT 제조사, 제품명, 단가 FROM 제품 WHERE 단가 > ALL(SELECT 단가 FROM 제품 WHERE 제조사 = 'H');
```

### 3-4. 결과

|   제조사   |   제품명   |   단가   |
| ---------- | ---------- | -------- |
|      B     |   초콜릿   |   6000   |
|      C     | 아이스크림 |   5000   |

---
external : false
title : "Upsert"
tag : [SQL]
date : 2024-10-21
---

![what is upsert?](/public/images/sql_question.png)

Upsert는 Insert와 Update의 합성어로, 데이터베이스에서 레코드를 삽입하거나, 삽입하려는 데이터가 이미 존재할 경우에는 그 레코드를 업데이트하는 작업을 의미합니다.  
Upsert는 보통 데이터 중복 처리를 간단하게 해결하기 위한 방법으로 사용되며, 여러 데이터베이스 시스템에서 이 기능을 다양한 방식으로 지원합니다.

## 1. MySQL에서 Upsert 사용하기

`INSERT ON DUPLICATE KEY UPDATE` 쿼리를 통해 구현할 수 있습니다.

### 1-1. 구문

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...)
ON DUPLICATE KEY UPDATE column1 = value1, column2 = value2, ...;
```

이 구문은 중복 키 오류를 자동으로 처리해주기 때문에 코드의 간결성과 데이터의 일관성을 유지하는 데 유용합니다.

### 1-2. 작성 예시

```sql
INSERT INTO users (id, name, age)
VALUES (1, 'Alice', 25)
ON DUPLICATE KEY UPDATE name = 'Alice', age = 25;
```

- 만약 users 테이블에 id가 1인 레코드가 없다면, 새 레코드를 삽입합니다.
- id가 1인 레코드가 이미 존재한다면, name과 age 값을 업데이트합니다.

## 2. SELECT 후 INSERT하는 방식

### 2-1. 구문

```sql
SELECT * FROM table_name WHERE unique_column = value;

IF row exists THEN
  UPDATE table_name
  SET column1 = value1, column2 = value2
  WHERE unique_column = value;
ELSE
  INSERT INTO table_name (column1, column2, ...)
  VALUES (value1, value2);
END IF;
```

### 2-2. SELECT 후 INSERT하는 방식과 비교

| 항목            | INSERT ON DUPLICATE KEY UPDATE                       | SELECT 후 INSERT 또는 UPDATE                          |
|-----------------|-----------------------------------------------------|------------------------------------------------------|
| **코드 복잡성**  | 단순하며 한 줄의 SQL로 처리 가능                      | SELECT 후 조건에 따라 INSERT 또는 UPDATE 필요           |
| **성능**         | 일반적으로 더 빠름 (한 번의 쿼리 실행)                  | 두 번의 쿼리 실행으로 인해 성능 저하 가능                |
| **동시성 문제**  | MySQL이 자동으로 처리해줌                              | 동시성 환경에서 잠금 문제가 발생할 수 있음               |
| **사용 용도**    | 간단한 삽입/업데이트 로직에 적합                        | 복잡한 로직 처리나 다양한 조건에 따른 분기 처리에 유리    |
| **제약 조건**    | PRIMARY KEY 또는 UNIQUE 인덱스가 반드시 있어야 함         | 인덱스 없이도 사용 가능하지만, 성능이 떨어질 수 있음       |

## 3. 다른 DB에서의 작성 방법

### 3-1. PostgreSQL

PostgreSQL에서는 Upsert 기능을 `INSERT ... ON CONFLICT` 구문을 통해 구현합니다.

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...)
ON CONFLICT (unique_column)
DO UPDATE SET column1 = value1, column2 = value2;
```

- 여기서 ON CONFLICT는 충돌이 발생했을 때 어떤 처리를 할지 정의하는 부분입니다.

### 3-2. SQLite

SQLite에서는 `INSERT OR REPLACE` 구문을 사용해 Upsert를 구현합니다.

```sql
INSERT OR REPLACE INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

- 만약 중복된 레코드가 있으면 해당 레코드를 삭제한 후 새 레코드를 삽입합니다.

### 3-3. SQL Server

SQL Server에서는 MERGE 구문을 통해 Upsert를 구현합니다.

```sql
MERGE INTO table_name AS target
USING (SELECT value1, value2) AS source
ON target.unique_column = source.unique_column
WHEN MATCHED THEN
  UPDATE SET column1 = source.value1
WHEN NOT MATCHED THEN
  INSERT (column1, column2) VALUES (value1, value2);
```

## 4. 요약

- Upsert는 Insert와 Update의 합성어로, 데이터를 삽입하거나 중복된 키가 있을 때는 해당 데이터를 업데이트하는 작업을 의미합니다.
- `INSERT ON DUPLICATE KEY UPDATE`는 MySQL에서 Upsert 기능을 제공하는 방식 중 하나로, 중복된 키가 있으면 업데이트하고, 없으면 삽입하는 구조입니다.
- Upsert는 다양한 데이터베이스에서 각각의 방식으로 지원되며, 모두 중복된 데이터를 처리하는 데 사용됩니다.

## 5. 참조

- [Upsert in SQL: What is an upsert, and when should you use one?](https://www.cockroachlabs.com/blog/sql-upsert)
- [MySQL UPSERT: Comprehensive Examples and Use Cases](https://blog.devart.com/mysql-upsert.html)
- [PostgreSQL UPSERT using INSERT ON CONFLICT Statement](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-upsert/index.html)
- [Update or merge records in Azure SQL Database with Azure Functions](https://learn.microsoft.com/en-us/azure/stream-analytics/sql-database-upsert)

---
external : false
title : "Database deletion query efficiency analysis"
tag : [Database]
date : 2024-08-08
---

## 1. 주제를 다루는 이유

Okky Q&A 글 중 [Sql 삭제 쿼리에 대한 2가지 방법 중 어떤 방법이 효율적인지 질문하는 글](https://okky.kr/questions/1510764?topic=questions&page=1)을 보고 해당 내용에 대해 조사해보았습니다.

## 2. 데이터베이스 삭제 쿼리 처리 방법

### 2-1. Java 단에서 반복적으로 DELETE 쿼리 실행

Java 애플리케이션에서 반복문을 통해 개별 DELETE 쿼리를 실행하는 방법이 있습니다. 예를 들어 삭제할 항목이 1000개일 경우, 1000개의 DELETE 쿼리가 실행되는 방식입니다. 이 접근법은 로직이 명확하고 코드가 직관적일 수 있다는 장점을 가지고 있습니다. 그러나, 이러한 방법에는 몇 가지 단점이 존재합니다.

첫째, 네트워크 오버헤드가 발생할 수 있습니다. 매번 데이터베이스와 연결을 열고 쿼리를 전송해야 하므로 네트워크 트래픽이 많아지게 됩니다. 이는 특히 대량의 삭제 작업을 처리할 때 문제를 일으킬 수 있습니다.

둘째, 성능 저하가 우려됩니다. 많은 수의 데이터베이스 호출이 이루어짐에 따라 성능이 저하될 수 있으며, 각 DELETE 쿼리가 데이터베이스에 대해 별도의 트랜잭션을 생성하게 되어 성능에 영향을 미칠 수 있습니다. 또한, 트랜잭션 관리의 복잡도가 증가할 수 있습니다. 각 쿼리의 트랜잭션을 별도로 관리해야 하므로 전체 시스템의 복잡성이 높아질 수 있습니다.

### 2-2. SQL에서 배치 삭제 실행

배치 처리와 IN 절을 활용하여 DELETE 쿼리를 처리하는 방법은 여러 DELETE 쿼리를 하나의 트랜잭션으로 묶거나, `DELETE FROM table WHERE id IN (value1, value2, ..., valueN);` 형태로 한 번에 여러 레코드를 삭제하는 방식입니다. 이 접근법은 성능 향상, 트랜잭션 관리의 용이성, 리소스 절약이라는 장점을 제공합니다.

첫째, 배치 처리와 IN 절을 활용하면 네트워크 오버헤드가 줄어들고 데이터베이스 서버에서의 처리 효율성이 높아지므로 전체 성능이 개선됩니다. 또한, 여러 DELETE 문을 하나의 트랜잭션으로 묶어 관리함으로써 안정성과 일관성을 유지할 수 있습니다. 이 방식은 데이터베이스와의 연결을 한 번만 열고 작업을 수행하므로 리소스 절약에도 기여합니다.

그러나, 이 방법에는 몇 가지 단점이 존재합니다. SQL 쿼리가 복잡해질 수 있으며, 경우에 따라 SQL 문법이 제한될 수 있습니다. 또한, 데이터베이스 시스템에 따라 한 쿼리에서 처리할 수 있는 최대 레코드 수에 제한이 있을 수 있어, 대량의 레코드를 처리할 때 문제가 발생할 수 있습니다.

## 3. 데이터베이스 시스템별 쿼리 제한 사항

데이터베이스 시스템은 각각의 특성과 설계에 따라 다양한 쿼리 기능을 지원하지만, 이들 시스템은 종종 특정 쿼리 작업에 대한 제한을 두고 있습니다. 이러한 제한 사항은 데이터베이스의 성능, 안정성, 보안 등을 고려하여 설정됩니다. 아래에서는 Oracle과 MySQL의 쿼리 제한 사항을 살펴보겠습니다.

### 3-1. Oracle

SQL 문장 길이와 IN 절의 사용에 대한 제한 사항은 데이터베이스 시스템의 성능과 효율성에 중요한 영향을 미칩니다.

Oracle의 SQL 문장 길이 제한은 최대 64KB로 설정되어 있으며, 하나의 SQL 문장이 이 크기를 초과할 수 없습니다. 이 제한을 초과하는 SQL 문장은 실행할 수 없으므로, 쿼리 작성 시 이 점을 유의해야 합니다.

IN 절의 경우, 포함될 수 있는 값의 수에 대한 명확한 제한은 없지만, 매우 큰 IN 절을 사용할 때 성능 문제가 발생할 수 있습니다. 많은 값을 포함하는 IN 절은 쿼리 최적화와 실행 속도를 저하시킬 수 있으며, 따라서 대량의 데이터를 처리할 때는 IN 절의 사용을 신중히 고려해야 합니다.

### 3-2. MySQL

MySQL의 SQL 문장 길이는 max_allowed_packet 파라미터를 통해 설정할 수 있으며, 기본값은 4MB입니다. 필요에 따라 이 값을 조정할 수 있으며, 예를 들어 16MB로 설정하려면 다음과 같은 명령어를 사용할 수 있습니다.

```sql
SET GLOBAL max_allowed_packet = 16777216;  -- 16MB
```

IN 절의 경우, MySQL에서는 포함될 수 있는 값의 수에 대한 명확한 제한은 없지만, 너무 많은 값을 포함하면 쿼리 성능이 저하될 수 있습니다. 이는 메모리와 CPU 자원의 소비가 많아져 성능 문제가 발생할 수 있기 때문입니다.

그러므로 MySQL을 사용하여 대량의 데이터를 처리할 때는 IN 절을 과도하게 사용하는 것을 피하고, 데이터를 적절히 분할하거나 배치 처리 방식을 활용하는 것이 좋습니다. 이러한 방법을 통해 성능 문제를 최소화하고 쿼리의 효율성을 높일 수 있습니다.

### 3-3. SQL 문장 길이와 IN 절 사용의 성능 고려 사항

SQL 문장 길이와 IN 절의 사용에 대한 제한 사항은 데이터베이스 시스템의 성능과 효율성에 중요한 영향을 미칩니다.

대량 데이터를 처리할 때는 IN 절을 적절히 사용하거나, 데이터를 여러 번 나누어 쿼리하는 방법을 고려하는 것이 좋습니다. 이를 통해 성능 문제를 최소화하고 쿼리의 효율성을 높일 수 있습니다.

## 4. 결론

- Java에서 반복적으로 DELETE 쿼리 실행: 네트워크 오버헤드와 성능 저하 문제로 비효율적일 수 있습니다.
- SQL에서 배치 삭제: 성능이 높고 리소스를 절약할 수 있으므로 대량의 데이터 처리 시 권장됩니다.
- 데이터베이스 시스템에 따라 쿼리 길이 제한, IN 절의 제한, 메모리 및 자원 제한 등이 다를 수 있으므로, 이를 고려하여 쿼리를 작성하는 것이 중요합니다.

## 5. Reference

- [MySQL - 15.2.2 DELETE Statement](https://dev.mysql.com/doc/refman/8.0/en/delete.html)
- [Oracle - DELETE Statement](https://docs.oracle.com/en/database/other-databases/nosql-database/23.3/sqlreferencefornosql/delete-statement.html)
- [DELETE (Transact-SQL)](https://learn.microsoft.com/en-us/sql/t-sql/statements/delete-transact-sql?view=sql-server-ver16)
- [MySQL 8.4 Reference Manual - B.3.2.8 Packet Too Large](https://dev.mysql.com/doc/refman/8.4/en/packet-too-large.html)
- [MySQL 8.4 Reference Manual - 7.1.8 Server System Variables](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_key_buffer_size)
- [Understanding For Loop in Java With Examples and Syntax](https://www.simplilearn.com/tutorials/java-tutorial/for-loop-in-java)

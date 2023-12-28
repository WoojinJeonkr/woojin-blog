---
external: false
title : "Data Normalization"
description : Let's learn about data normalization process.
date: 2022-10-01
---

## 1. 데이터 정규화

데이터의 중복성을 줄이고 해당 데이터베이스를 보다 효율적으로 만들기 위해 데이터베이스의 정보를 구조화하는 것을 데이터 정규화라고 한다.

## 2. 정규화된 데이터의 이점

- 트랜잭션 쿼리 단순화: 고객 주소를 데이터베이스의 다른 위치에 여러 번 저장하거나 동일한 필드에 여러 주소를 보관하는 경우 해당 쿼리를 실행하는 시간이 오래 걸리는데에 비해 정규화된 데이터를 사용하면 고객 주소를 조회하는 쿼리는 해당 주소를 저장하는 단일 필드만 검색하면 된다.
- 데이터베이스 크기 감소: 데이터베이스에 몇 개의 테이블만 포함되어 있는 경우에는 큰 문제가 되지 않을 수 있지만 더 큰 규모로 작업하는 경우 디스크 공간이 부족할 수 있다. 이런 경우 데이터를 정규화시키면 중복 정보가 줄어들어 로컬 서버를 실행하든 클라우드 호스팅 데이터베이스에 의존하든 스토리지 비용을 절감할 수 있다.
- 데이터 유지 관리 편리: 데이터베이스에 여러 번 저장된 동일한 고객 데이터가 있다고 가정해보자.고객이 주소를 변경할 때마다 Customer Address 필드의 모든 인스턴스에서 주소를 업데이트해야 하므로 오류가 발생할 여지가 많다. 이 경우 Customer Address 데이터가 정규화되면 orders와 같은 다른 관련 테이블에 조인되는 하나의 필드만 갖게 된다.

## 3. 데이터 정규형 규칙

### 3-1. 제 1 정규형 (1NF)

테이블 내의 각 필드가 하나의 값만 저장해야 하고 테이블에 Address1 및 Address2라는 열과 같은 유사한 정보를 저장하는 여러 필드가 포함되어서는 안 된다.

### 3-2. 제 2 정규형 (2NF)

중복성을 줄이고 모든 필드가 엔터티 키가 식별하는 내용을 설명하는지 확인한다.
2NF를 충족하려면 엔터티 키가 아닌 테이블의 모든 필드가 테이블의 엔터티 키(두 필드로 구성된 복합 키일 수 있음)에 완전히 종속되어야 한다.

### 3-3. 제 3 정규형 (3NF)

테이블이 2NF를 충족하는 것 외에도 전이 종속성(A열이 B열에 종속되고 B열이 엔터티 키에 종속될 때 발생)을 포함하지 않는 경우 제 3 정규형을 충족한다.3NF에 따라 정규화하려면 엔터티 키에 직접 의존하지 않기 때문에 테이블에서 A열을 제거하고 고유한 엔터티 키가 있는 다른 테이블에 배치해야 한다.

## 4. 데이터 정규화의 단점

더 높은 수준의 정규화에 도달하면 데이터베이스가 특정 분석 쿼리(ex. 많은 데이터를 가져와야 하는 쿼리)를 더 느린 속도로 수행하게 된다는 단점이 있다.정규화된 데이터는 데이터베이스가 쿼리를 수행하기 위해 여러 테이블을 활용해야 하기 때문에 특히 데이터베이스가 복잡해지면 더 오래 걸리게 된다.

## 5. 데이터 정규화 과정 예시

[예시 확인하기](https://github.com/WoojinJeonkr/woojinBlog/blob/main/public/images/doc/normalization.pdf)

## 6. 참고 자료

- [metabase.com - Data normalization](https://www.metabase.com/learn/databases/normalization)
- [Database normalization](https://en.wikipedia.org/wiki/Database_normalization)
- [Description of the database normalization basics](https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description)
- [What is Normalization in DBMS (SQL)? 1NF, 2NF, 3NF Example](https://www.guru99.com/database-normalization.html)

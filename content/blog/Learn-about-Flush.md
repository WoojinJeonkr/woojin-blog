---
external: false
title: "Learn about Flush"
date: 2023-02-23
---

## 1. flush란?

영속성 컨텍스트의 변경 내용을 데이터베이스에 반영하는 것
트랜잭션에 commit이 발생하거나 EnitityManager의 flush 메서드를 호출하는 경우, JPQL 쿼리가 실행되는 경우에 flush가 발생한다.

## 2. flush 동작 과정

영속성 컨텍스트에서 변경 감지 -> 수정이 발생한 Entity 지연 SQL 저장소에 등록 -> 쓰기 지연 SQL 저장소의 쿼리 데이터베이스로 전송

## 3. 모드

1. AUTO: 커밋이나 쿼리 실행시 flush (default)
2. COMMIT: 커밋할 때만 flush

## 4. Reference

- [Spring Data JPA](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/)
- [Difference Between save() and saveAndFlush() in Spring Data JPA](https://www.baeldung.com/spring-data-jpa-save-saveandflush)

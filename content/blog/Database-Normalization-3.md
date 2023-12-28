---
external: false
title: "Database Normalization 3"
date: 2023-10-24
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/database-normalization-3/problem?isFullScreen=true)

## 2. 정답

```textile
3
```

## 3. 풀이

여러 학생과 여러 강의 간의 다대다 관계를 나타내면서 2NF 규칙을 따르는 관계형 데이터베이스를 설계하려면 적어도 세 개의 테이블이 필요합니다.

### 3-1. STUDENT 테이블

- student-id (primary key)
- name
- date of birth
- date of enrollment

### 3-2. COURSE 테이블

- course code(primary key)
- instructor
- etc

### 3-3. ENROLLMENT 테이블

- student-id (STUDENT 테이블을 참조하는 외래 키)
- course code (COURSE 테이블을 참조하는 외래 키)
- date of enrollment
- etc

이 설계에서

- STUDENT 테이블은 학생 정보를 저장합니다.
- COURSE 테이블은 강의 정보를 저장합니다.
- ENROLLMENT 테이블은 학생과 강의 간의 다대다 관계를 나타내며 ENROLLMENT 테이블의 각 레코드는 특정 강의에 대한 학생의 등록을 나타냅니다.

이 세 개의 테이블을 사용하여 학생과 강의 간의 관계를 효과적으로 나타낼 수 있으며 2NF 정규화 규칙을 준수할 수 있습니다.

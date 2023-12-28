---
external: false
title: "Annotation"
date: 2023-01-26
---

## 1. JPA annotation

- Java 소스 코드에 추가할 수 있는 메타데이터 형식
- 컴파일러에 의해 생성된 클래스 파일에 포함되고 소스파일 및 클래스 파일에서 읽을 수 있다.
- 런타임 시 JVM에서 주석 유지가 가능하다.
- 표준 JDK의 일부가 아니므로 구현 프레임워크를 추가할 때 얻을 수 있다.

### 1-1. JPA 주석 살펴보기

#### 1-1-1. javax.persistence.Entity: 클래스가 엔터티임을 지정, 열거형 인터페이스인 클래스에 적용 가능

```java
import javax.persistence.Entity;

@Entity
public class Member {
}
```

#### 1-1-2. @Table: 엔터티가 매핑되는 데이터베이스의 테이블을 지정

```java
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "member")
public class Member {
}
```

#### 1-1-3. @Column: 컬럼 매핑 지정 가능, 테이블의 열 이름을 지정하는데 사용

```java
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "member")
public class Member {
 
  @Column(name = "member_name")
  private String memberName;
}
```

#### 1-1-4. @Id: 엔티티의 기본 키를 지정

```java
import javax.persistence.*;

@Entity
@Table(name = "member")
public class Member { 
  @Id
  @Column(name = "id")
  private int id;
}
```

#### 1-1-5. @GeneratedValue: 기본 키에 대한 생성 전략을 지정

```java
import javax.persistence.*;

@Entity
@Table(name = "member")
public class Member { 
  @Id
  @Column(name = "id")
  // GenerationType.IDENTITY: 기본 키 생성을 데이터베이스에 위임 -> id값을 null로 하면 DB에서 알아서 AUTO_INCREMENT로 설정
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
}
```

#### 1-1-6. @Lob: 대형 객체(Large Object) 선언

```java
@Lob
public String getEmployeeAddress() {
    return employeeAddress;
}
```

- LONG 타입과 LOB 타입 비교

|             Long             |              LOB             |
|:----------------------------:|:----------------------------:|
| 테이블 하나당 한 컬럼만 허용 | 테이블 하나당 여러 컬럼 허용 |
|          최대 2기가          |          최대 4기가          |
|       Data에 직접 접근       |    Locator로 데이터에 접근   |
|       테이블 안에 저장       |     테이블과 별도로 저장     |
|    Object 타입 지원 불가능   |     Object 타입 지원 가능    |
|     순차적인 접근만 허용     |       랜덤한 접근 허용       |

## 2. Hibernate annotation

Hibernate는 다음과 같이 세 가지 유형의 기본 상속 매핑 전략을 지원한다.

1. 클래스 계층별 테이블
2. 하위 클래스당 테이블
3. 구체적인 클래스당 테이블

### 2-1. 클래스 계층별 테이블 - 클래스 계층별 전략적 단일 테이블

```java
@Entity
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
// @DiscriminatorColumn: SINGLE_TABLE 및 JOINED 상속 매핑 전략에 대한 판별자 열을 지정
@DiscriminatorColumn(name="cartype", discriminatorType=DiscriminatorType.STRING )
@DiscriminatorValue("Car")
public class Car {  }
 
@Entity
@DiscriminatorValue("BMW")
public class BMW extends Car {  }
```

### 2-2. 하위 클래스당 테이블 - 조인된 하위 클래스 전략

```java
@Entity
@Inheritance(strategy=InheritanceType.JOINED)
public class Ship implements Serializable {}
 
@Entity
@PrimaryKeyJoinColumn
public class Titanic extends Ship {}
```

### 2-3. 구체적인 클래스당 테이블

```java
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Aeroplane implements Serializable {}
```

## 3. @CreationTimestamp와 @CreatedDate 비교

|                     @CreationTimestamp                    |                     @CreatedDate                    |
|:---------------------------------------------------------:|:---------------------------------------------------:|
|                       Hibernate 주석                      |                       JPA 주석                      |
|                       추가 선언 없음                      |  @EnableJpaAuditing, @EntityListener 추가 선언 필요 |
| insert와 같은 DML이 이루어질 때 자동적으로 현재 시간 입력 | 엔티티가 생성되어 DB에 저장될 때의 시간이 자동 저장 |

## 4. Reference

- [JPA Annotations - Hibernate Annotations](https://www.digitalocean.com/community/tutorials/jpa-hibernate-annotations)
- [1 Introduction to Large Objects](https://docs.oracle.com/cd/E18283_01/appdev.112/e18294/adlob_intro.htm)
- [What's the difference between @CreationTimestamp and @CreatedDate in Spring boot jpa?](https://stackoverflow.com/questions/66149224/whats-the-difference-between-creationtimestamp-and-createddate-in-spring-boot)
- [Auditing with JPA, Hibernate, and Spring Data JPA](https://www.baeldung.com/database-auditing-jpa)

---
external: false
title : "DTO, VO and Entity"
date: 2022-10-10
---

## 1. DTO (Data Transfer Object)

- 데이터를 전달하기 위한 객체
- 여러 레이어 사이에서 DTO를 사용할 수 있지만, 주로 View와 Controller 사이에서 데이터를 주고 받을 때 활용
- getter/setter 메소드를 포함하고, 이외의 비즈니스 로직은 포함하지 않음
  - setter를 가지는 경우 가변 객체로 활용 가능
  - setter가 아닌 생성자로 초기화하는 경우 데이터를 전달하는 과정에서 데이터가 변조되지 않는 불변 객체로 활용 가능

## 2. VO (Value Object)

- 값 자체를 표현하는 객체
- 객체들의 주소가 달라도 값이 같으면 동일한 것으로 판단
- getter 메소드와 함께 비즈니스 로직도 포함할 수 있지만 setter 메소드를 가지지 않음
- 값 비교를 위해 equals()와 hashCode() 메소드를 오버라이딩 해줘야 함

## 3. Entity

- 실제 DB 테이블과 매핑되는 핵심 클래스
- Entity를 기준으로 테이블이 생성되고 스키마가 변경됨
- 요청이나 응답값 전달 class로 사용 불가
- id로 구분되며 비즈니스 로직 사용 가능
- DTO와 같이 setter를 가지는 경우 가변 객체로 활용 가능

## 4. 정리

|      분류      |             DTO             |       VO       |         ENTITY        |
|:--------------:|:---------------------------:|:--------------:|:---------------------:|
|      정의      | 레이어간 데이터 전송용 객체 | 값 표현용 객체 | DB 테이블 매핑용 객체 |
| 상태 변경 여부 |     가변 또는 불변 객체     |    불변 객체   |  가변 또는 불변 객체  |
| 로직 포함 여부 |        로직 포함 불가       | 로직 포함 가능 |     로직 포함 가능    |

## 5. Reference

- [Tecoble - DTO vs VO vs Entity](https://tecoble.techcourse.co.kr/post/2021-05-16-dto-vs-vo-vs-entity/)
- [List differences: DTO, VO, Entity, Domain, Model](https://stackoverflow.com/questions/72025894/list-differences-dto-vo-entity-domain-model)

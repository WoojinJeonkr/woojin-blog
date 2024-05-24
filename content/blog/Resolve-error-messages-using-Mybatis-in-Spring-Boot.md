---
external : false
title : "Resolve error messages using Mybatis in Spring Boot"
tag : [Spring, Java]
date : 2024-05-24
---

## 1. Error List

1. could not detacted configuration class spring boot
2. PRIMARY KEY DUPLICATE
3. mybatis foreach Cannot find class: java.util.array
4. BadSqlGrammarException
5. SQLSyntaxErrorException
6. java.sql.SQLException: SQL String cannot be empty

## 2. Solve

1. Spring Boot의 @SpringBootApplication Annotation으로 설정한 Class 명과,
Test수행을 위해 작성한 Class 명이 일치하지 않는 경우에 발생합니다.
2. 동일한 키가 하나 이상 중복되고 있는 경우에 발생합니다.
3. array의 경우, myBatis에서 배열 처리를 하려고 해서 안 되며 arrayList의 경우, 자바에서 배열 처리를 해서 넘어오므로 제대로 실행됩니다. Mybatis에서는 Java의 Collection 프레임워크를 지원하므로, ArrayList와 같은 컬렉션 타입은 Mybatis의 foreach와 같은 기능을 활용하여 잘 처리됩니다. 반면에 Java의 배열은 Mybatis에서 직접 처리되지 않기 때문에 문제가 발생합니다. 따라서 Mybatis에서는 배열 대신에 컬렉션을 사용하는 것이 좋습니다.
4. SQL 문법에 오류가 있는 경우에 발생합니다. SQL을 작성하는 Mapper 부분에서 오류가 있는지 확인해보면 해결 가능합니다.
5. SQL 구문에 구문 오류가 있는 경우에 발생합니다. SQL을 작성하는 Mapper 부분에서 오타가 있는지 확인해보면 해결 가능합니다.
6. 보내주는 변수에 해당하는 값이 없거나 null인 경우에 발생합니다. `system.out.print`와 같은 출력함수로 변수에 값이 제대로 전달되는지 확인해봅시다.

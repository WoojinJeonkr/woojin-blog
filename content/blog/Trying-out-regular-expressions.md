---
external : false
title : "Trying out regular expressions"
tag : [Programmers, Java]
date : 2025-05-13
---

정규표현식이란, 특정 패턴을 나타내기 위해 사용되는 일종의 언어입니다. 이를 통해 텍스트 데이터 내에서 원하는 형태의 문자열을 검색, 추출, 치환하거나 데이터의 유효성을 검사하는 등의 작업을 매우 효율적으로 수행할 수 있습니다. 다양한 프로그래밍 언어와 텍스트 편집기 등에서 널리 활용되는 강력한 도구입니다.

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/11/lessons/132)에서 확인하실 수 있습니다.

## 2. Answer

```java
// 전화번호를 찾는 정규 표현식입니다.
// 0으로 시작하고, 뒤에 1자리 또는 2자리 숫자가 오며, 선택적으로 공백 또는 하이픈(-)이 올 수 있습니다.
// 그 뒤에는 3자리 또는 4자리 숫자가 오고, 선택적으로 공백 또는 하이픈(-)이 올 수 있습니다.
// 마지막으로 3자리 또는 4자리 숫자가 옵니다.
String regex = "0\\d{1,2}[ -]?\\d{3,4}[ -]?\\d{3,4}";

// 찾을 대상 문자열입니다. 여러 전화번호와 이메일 주소가 섞여 있습니다.
String searchTarget = """
        Luke Skywarker 02-123-4567 luke@daum.net
        다스베이더 070-9999-9999 darth_vader@gmail.com
        princess leia 010 2454 3457 leia@gmail.com""";

// Pattern 클래스를 사용하여 정규 표현식을 컴파일합니다.
Pattern pattern = Pattern.compile(regex);

// Matcher 클래스를 사용하여 대상 문자열에서 패턴과 일치하는 부분을 찾습니다.
Matcher matcher = pattern.matcher(searchTarget);

// 일치하는 전화번호를 저장할 StringBuilder 객체를 생성합니다.
StringBuilder result = new StringBuilder();

// find() 메서드를 사용하여 대상 문자열에서 정규 표현식과 일치하는 부분을 순차적으로 찾습니다.
while (matcher.find()) {
    // group() 메서드는 현재 찾은 일치하는 부분(전화번호)을 반환합니다.
    result.append(matcher.group()).append("\n");
}

// 찾은 전화번호들을 출력합니다.
System.out.println(result.toString().trim());
```

## 3. RegExp Explanation

해당 문제에서 사용된 정규표현식은 다음과 같습니다.

```java
0\d{1,2}[ -]?\d{3,4}[ -]?\d{3,4}
```

위 표현식은 전화번호 형태의 문자열을 찾기 위한 패턴으로, 구체적으로는 아래와 같은 구조를 가집니다.

1. 0: 숫자 0으로 시작해야 합니다.
2. \d{1,2}: 일반적으로 지역 번호를 명시합니다. 숫자가 1자리 또는 2자리 와야 합니다.
3. [ -]?: 공백 문자 또는 하이픈(-)이 0번 또는 1번 나타날 수 있습니다.
4. \d{3,4}: 전화번호의 중간 부분을 명시합니다. 숫자가 3자리 또는 4자리가 와야 합니다.
5. [ -]?: 또 다시 공백 문자 또는 하이픈이 0번 또는 1번 나타날 수 있습니다
\d{3,4}: 전화번호의 끝 부분을 명시합니다. 숫자가 3자리 또는 4자리 와야 합니다.

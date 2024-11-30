---
external : false
title : "Making a JadenCase string"
tag : [Programmers, Java]
date : 2024-11-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12951)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해서는 문자열의 각 단어의 첫 번째 문자를 대문자로, 나머지 문자는 소문자로 변환해야 하며, 공백 처리에 신경을 써야 합니다. 공백은 단어를 구분하는 중요한 역할을 하므로, 문자열을 순차적으로 처리하면서 공백을 유지하고 각 단어의 첫 글자를 적절하게 변환하는 방식으로 접근합니다.

먼저, 문자열을 순차적으로 탐색하며 공백을 기준으로 각 단어를 식별할 수 있어야 합니다. 공백 뒤에 오는 문자는 새로운 단어의 첫 문자로 간주하여 대문자로 변환하고, 그 이후의 문자는 소문자로 변환해야 합니다. 이때 문자열의 처음이나 공백을 처리하는 로직을 정확히 설정해야 합니다. 또한 공백이 연속으로 나오는 경우도 있기 때문에, 공백을 기준으로 단어의 시작과 끝을 잘 구분해야 합니다. 이 문제에서 중요한 점은 단어의 첫 문자가 대문자이고, 나머지 문자는 소문자여야 한다는 조건입니다.

주의 사항으로는 문자열 앞이나 중간에 불필요한 공백이 있을 수 있다는 점을 고려해야 합니다. 예를 들어, 연속된 공백이나 문자열이 공백으로 시작하거나 끝날 수 있습니다. 이러한 경우에도 정확히 처리해야 하며, 공백 뒤의 문자가 새 단어의 첫 문자가 되도록 해야 합니다.

## 3. Counterexample

- 연속된 공백 처리

  - 입력: "hello   world"
  - 출력: "Hello   World"
  - 설명: 단어 사이에 여러 개의 공백이 있을 경우, 각 단어의 첫 문자는 대문자로 변환되고, 그 사이의 공백은 그대로 유지됩니다.

- 문자열 앞뒤에 공백 처리

  - 입력: "  hello world "
  - 출력: "  Hello World "
  - 설명: 문자열 앞과 뒤에 공백이 있을 경우, 공백은 그대로 유지되며, 각 단어의 첫 문자는 대문자로 변환됩니다.

- 빈 문자열 처리

  - 입력: ""
  - 출력: ""
  - 설명: 빈 문자열은 그대로 빈 문자열로 반환되어야 합니다.

- 숫자와 문자가 섞인 단어 처리

  - 입력: "123 abc"
  - 출력: "123 Abc"
  - 설명: 숫자는 대소문자 변환에 영향을 주지 않으므로, 숫자 뒤에 오는 알파벳은 대문자로 변환되고 그 나머지는 소문자로 처리됩니다.

- 단어가 하나인 경우

  - 입력: "hello"
  - 출력: "Hello"
  - 설명: 단어가 하나만 있을 경우, 그 첫 번째 문자는 대문자로 변환됩니다.

- 공백만 있는 경우

  - 입력: "     "
  - 출력: "     "
  - 설명: 문자열이 공백만 있을 경우, 공백은 그대로 유지되어야 하며 변환은 필요 없습니다.

## 4. Answer

```java
class Solution {
  public String solution(String s) {
    // 결과를 저장할 StringBuilder 초기화
    StringBuilder result = new StringBuilder();
    
    // 새로운 단어의 시작을 추적하는 변수
    boolean isNewWord = true;

    // 문자열의 각 문자를 하나씩 순회
    for (int i = 0; i < s.length(); i++) {
      // 현재 문자 가져오기
      char currentChar = s.charAt(i);

      // 현재 문자가 공백이면
      if (currentChar == ' ') {
        result.append(currentChar);  // 공백을 그대로 결과에 추가
        isNewWord = true;  // 공백 뒤에는 새로운 단어가 시작됨
      } else {
        // 새로운 단어의 첫 문자인 경우
        if (isNewWord) {
          result.append(Character.toUpperCase(currentChar));  // 대문자로 변환
          isNewWord = false;  // 첫 문자를 처리했으므로 이제는 새 단어가 아님
        } else {
          result.append(Character.toLowerCase(currentChar));  // 그 외 문자는 소문자로 변환
        }
      }
    }

    // 최종 결과 문자열 반환
    return result.toString();
  }
}
```

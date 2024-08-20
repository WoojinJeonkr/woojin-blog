---
external : false
title : "Remove pairs"
tag : [Programmers, Java]
date : 2024-08-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12973)에서 확인하실 수 있습니다.

## 2. Problem approach 1

문제를 해결하기 위해 스택을 활용하는 접근 방식을 사용합니다. 주어진 문자열에서 인접한 두 문자를 반복적으로 제거하는 과정은 다음과 같이 진행됩니다.

우선, 문자열의 각 문자를 차례로 처리합니다. 이때 처리한 문자를 스택에 저장합니다. 문자를 처리하면서, 스택의 맨 위 문자가 현재 문자와 동일한 경우에는 인접 쌍이 형성된 것으로 간주하고, 스택에서 맨 위 문자를 제거합니다. 이렇게 하면 쌍이 제거됩니다. 만약 현재 문자가 스택의 맨 위 문자와 같지 않다면, 현재 문자를 스택에 추가합니다.

모든 문자를 처리한 후, 스택이 비어 있으면 모든 문자가 성공적으로 제거된 것입니다. 반대로, 스택이 비어 있지 않다면 일부 문자가 남아 있으므로, 제거가 완전히 성공하지 못한 것입니다.

이 접근법은 문자열을 한 번만 순회하면서 각 문자를 스택에 추가하거나 제거하여 인접 쌍을 처리합니다. 이를 통해 문제를 효율적으로 해결할 수 있습니다.

```java
import java.util.Stack;

class Solution {
  public int solution(String s) {
    Stack<Character> stack = new Stack<>();

    for (char ch : s.toCharArray()) {
      if (!stack.isEmpty() && stack.peek() == ch) {
        stack.pop();  // 현재 문자와 쌍을 이루므로 스택에서 맨 위 문자를 제거합니다
      } else {
        stack.push(ch);  // 현재 문자를 스택에 추가합니다
      }
    }

    // 스택이 비어 있으면 모든 문자가 성공적으로 쌍을 이루어 제거된 것입니다
    return stack.isEmpty() ? 1 : 0;
  }
}
```

## 2. Problem approach 2

다른 방법으로 배열을 사용하여 스택을 구현하고, 문자열 처리의 효율성을 높이는 방법을 사용할 수 있습니다.

Java의 ArrayDeque는 동적 배열 기반으로 설계되어 있어 메모리 재배치가 발생할 수 있습니다. 반면, 직접 배열을 사용하여 스택을 구현하면 메모리 접근 패턴을 최적화할 수 있으며, 메모리 재배치와 같은 오버헤드를 줄일 수 있습니다.

또한, 문자열을 직접 반복하여 처리하는 것 외에도, 문자열을 문자 배열로 변환하여 처리하면 속도를 개선할 수 있습니다. 문자 배열은 배열의 인덱스를 통해 빠르게 접근할 수 있어, 문자열의 각 문자를 더 효율적으로 처리할 수 있습니다.

마지막으로, 스택 연산을 구현할 때 불필요한 연산을 최소화하는 것이 중요합니다. 스택에 문자를 추가하거나 제거하는 연산이 필요한 경우에만 수행하고, 각 연산이 필요 없는 상황에서는 최소한의 작업만 수행함으로써 전체적인 성능을 개선할 수 있습니다.

```java
import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
  public int solution(String s) {
    Deque<Character> stack = new ArrayDeque<>();

    for (char ch : s.toCharArray()) {
      if (!stack.isEmpty() && stack.peek() == ch) {
        stack.pop();  // 현재 문자와 쌍을 이루므로 스택에서 맨 위 문자를 제거합니다
      } else {
        stack.push(ch);  // 현재 문자를 스택에 추가합니다
      }
    }

    // 스택이 비어 있으면 모든 문자가 성공적으로 쌍을 이루어 제거된 것입니다
    return stack.isEmpty() ? 1 : 0;
  }
}
```

## 3. Problem approach 3

마지막으로 라이브러리를 사용하지 않고 배열만을 사용하여 스택을 구현할 수도 있습니다.

스택을 배열로 구현하여 문제를 해결합니다. char[] stack을 사용하여 스택을 배열로 구현하면, 메모리 오버헤드를 줄이고, 고정된 크기의 배열을 사용하여 성능을 최적화할 수 있습니다. int top 변수를 통해 스택의 상단을 관리하며, top이 -1이면 스택이 비어 있는 상태를 의미합니다.

문자열을 처리하면서 쌍을 제거하는 과정은 다음과 같습니다. 문자열을 toCharArray() 메서드를 사용하여 문자 배열로 변환한 후, 각 문자를 순회합니다. 현재 문자가 스택의 상단 문자와 동일하면 인접 쌍을 형성한 것으로 간주하고 top을 감소시켜 상단 문자를 제거합니다. 반대로, 현재 문자가 스택의 상단 문자와 다르면 현재 문자를 스택에 추가하고 top을 증가시킵니다.

최종적으로 스택의 상태를 확인하여 최종 결과를 도출합니다. 모든 문자를 처리한 후 스택이 비어 있으면 모든 문자가 성공적으로 쌍을 이루어 제거된 것이며, 이 경우 1을 반환합니다. 스택이 비어 있지 않으면 일부 문자가 남아 있으므로 0을 반환합니다.

```java
class Solution {
  public int solution(String s) {
    // 스택을 위한 배열을 준비합니다. 문자열 길이만큼의 배열을 사용합니다.
    char[] stack = new char[s.length()];
    int top = -1;  // 스택의 상단을 가리킵니다.

    // 문자열을 순회하면서 스택을 처리합니다.
    for (char ch : s.toCharArray()) {
      if (top >= 0 && stack[top] == ch) {
        top--;  // 현재 문자가 스택의 상단과 같다면 쌍을 제거합니다.
      } else {
        stack[++top] = ch;  // 스택에 문자를 추가합니다.
      }
    }

    // 스택이 비어있으면 모든 문자가 성공적으로 제거된 것입니다.
    return top == -1 ? 1 : 0;
  }
}
```
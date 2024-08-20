---
external : false
title : "Phone book"
tag : [Programmers, Java]
date : 2024-08-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42577)에서 확인하실 수 있습니다.

## 2. Problem Solving process

전화번호부에서 하나의 번호가 다른 번호의 접두사인지 확인하기 위해 2가지 방법을 사용할 수 있습니다.

첫번째로, 정렬 후에 접두사를 검사합니다. 전화번호부를 정렬한 후에 접두사 검사를 수행하면, 인접한 번호들만 검사하면 되므로 효율적입니다. 이 방법은 시간 복잡도를 줄일 수 있지만, 정렬 자체에 O(n log n)의 시간 복잡도가 필요합니다.

두번째로, 전화번호를 트라이에 삽입하면서 접두사 검사를 동시에 할 수 있습니다. 이 방법은 O(n * m)의 시간 복잡도를 가집니다. 여기서 n은 전화번호의 개수, m은 각 전화번호의 길이입니다.

이 중 트라이 구조를 사용하여 접두사 검사를 구현해보았습니다. 먼저 트라이 노드 클래스를 정의합니다. 트라이의 각 노드는 자식 노드를 가지고 있으며, 전화번호의 끝을 표시할 수 있습니다. 그 다음 전화번호를 삽입하면서 접두사를 검사합니다. 전화번호를 삽입하면서 현재 노드가 이미 끝나는 전화번호가 있거나, 자식 노드가 있는 경우 접두사 검사에 실패합니다.

## 3. Answer

먼저 아래와 같이 작성했습니다.

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
  public boolean solution(String[] phone_book) {
    // 트라이 노드를 정의하는 클래스
    class TrieNode {
      Map<Character, TrieNode> children = new HashMap<>();
      boolean isEnd; // 전화번호의 끝을 표시하는 플래그
    }

    TrieNode root = new TrieNode(); // 트라이의 루트 노드 생성

    // 전화번호부를 순회하며 각 전화번호를 트라이에 삽입
    for (String number : phone_book) {
      TrieNode node = root;
      for (int i = 0; i < number.length(); i++) {
        char digit = number.charAt(i);
        
        // 현재 노드에 해당 자식 노드가 없으면 새로 생성
        if (!node.children.containsKey(digit)) {
          node.children.put(digit, new TrieNode());
        }
        
        // 자식 노드로 이동
        node = node.children.get(digit);
        
        // 현재 노드가 이미 전화번호의 끝을 표시하면 접두사 조건 실패
        if (node.isEnd) {
          return false;
        }
      }
      
      // 현재 노드에 자식 노드가 있으면 현재 번호가 다른 번호의 접두사인 경우
      if (!node.children.isEmpty()) {
        return false;
      }
      
      // 현재 노드를 전화번호의 끝으로 표시
      node.isEnd = true;
    }
    
    // 모든 전화번호가 접두사 조건을 만족하지 않으면 true 반환
    return true;
  }
}
```

이제 코드의 가독성을 높이기 위해 코드를 분리해보겠습니다.

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
  // 트라이 노드 클래스 정의
  class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    boolean isEndOfNumber; // 전화번호의 끝을 표시하는 플래그
  }

  public boolean solution(String[] phoneBook) {
    TrieNode root = new TrieNode(); // 트라이의 루트 노드 생성

    // 전화번호부를 순회하며 각 전화번호를 트라이에 삽입
    for (String number : phoneBook) {
      // 삽입과 동시에 접두사 검사 수행
      if (!insertAndCheckPrefix(root, number)) {
        return false; // 접두사 조건이 만족되지 않으면 false 반환
      }
    }
    return true; // 모든 전화번호가 접두사 조건을 만족하면 true 반환
  }

  private boolean insertAndCheckPrefix(TrieNode root, String number) {
    TrieNode node = root;

    // 전화번호의 각 문자에 대해 트라이에 삽입
    for (int i = 0; i < number.length(); i++) {
      char digit = number.charAt(i);

      // 현재 노드에 해당 자식 노드가 없으면 새로 생성
      if (!node.children.containsKey(digit)) {
        node.children.put(digit, new TrieNode());
      }

      node = node.children.get(digit);

      // 현재 노드가 이미 끝나는 전화번호를 표시하면 접두사 조건 실패
      if (node.isEndOfNumber) {
        return false;
      }
    }

    // 현재 노드에 자식 노드가 있으면 현재 번호가 다른 번호의 접두사인 경우
    if (!node.children.isEmpty()) {
      return false;
    }

    // 현재 노드를 전화번호의 끝으로 표시
    node.isEndOfNumber = true;
    return true; // 접두사 조건을 만족하면 true 반환
  }
}
```

결과적으로 두 코드 모두 테스트 케이스를 통과했다고 나옵니다.

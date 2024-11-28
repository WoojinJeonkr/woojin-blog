---
external : false
title : "Expression with N"
tag : [Programmers, Java]
date : 2024-11-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42895)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 동적 계획법을 활용하여 해결할 수 있습니다. 핵심 아이디어는 특정 횟수만큼 주어진 숫자 N을 사용해 만들 수 있는 모든 가능한 숫자를 저장하고, 이를 조합하여 목표 숫자 number를 만드는 데 필요한 최소 횟수를 찾는 것입니다.

먼저, N을 여러 번 반복해 만든 숫자(예: 5, 55, 555 등)를 초기값으로 설정합니다. 이후, N을 사용하는 횟수를 1번부터 8번까지 증가시키며, 각 횟수에 대해 새로운 숫자들을 생성합니다. 이때, 숫자들을 생성하기 위해 이전 단계에서 만든 숫자 집합을 조합하여 사칙연산(덧셈, 뺄셈, 곱셈, 나눗셈)을 수행합니다. 이렇게 생성된 숫자들은 현재 횟수에 해당하는 집합에 저장됩니다. 만약 어느 단계에서 목표 숫자인 number가 생성된다면, 해당 단계의 숫자 사용 횟수를 반환합니다.

숫자 집합 간의 조합을 통해 가능한 숫자를 반복적으로 확장해 나가기 때문에, 각 단계에서 만들어진 숫자들은 다음 단계의 계산에 활용됩니다. 이를 통해 점진적으로 문제를 해결합니다. 만약 N을 8번 사용했음에도 number를 만들 수 없다면, 문제의 조건에 따라 -1을 반환합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int solution(int N, int number) {
    // N을 number로 바로 표현할 수 있는 경우
    if (N == number) return 1;
    
    // DP 리스트 생성: N 사용 횟수별로 만들 수 있는 숫자 집합
    List<Set<Integer>> dp = new ArrayList<>();
    for (int i = 0; i <= 8; i++) {
      dp.add(new HashSet<>());
    }
    
    // N을 1번, 2번, 3번... 연속으로 사용하여 만들 수 있는 숫자 추가
    for (int i = 1; i <= 8; i++) {
      int repeatedN = Integer.parseInt(String.valueOf(N).repeat(i)); // N, NN, NNN ...
      dp.get(i).add(repeatedN);
    }
    
    // N 사용 횟수를 1번부터 8번까지 순회하며 가능한 숫자 계산
    for (int i = 1; i <= 8; i++) {
      for (int j = 1; j < i; j++) { // j와 i-j의 조합
        for (int x : dp.get(j)) {
          for (int y : dp.get(i - j)) {
            dp.get(i).add(x + y); // 덧셈
            dp.get(i).add(x - y); // 뺄셈
            dp.get(i).add(x * y); // 곱셈
            if (y != 0) dp.get(i).add(x / y); // 나눗셈 (y가 0이 아닐 때만)
          }
        }
      }
      
      // N 사용 횟수 i에서 number를 만들 수 있으면 반환
      if (dp.get(i).contains(number)) {
        return i;
      }
    }
    
    // N을 8번 사용해도 number를 만들 수 없는 경우
    return -1;
  }
}
```

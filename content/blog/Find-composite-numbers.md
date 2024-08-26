---
external : false
title : "Find composite numbers"
tag : [Programmers, Java]
date : 2024-08-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120846)에서 확인하실 수 있습니다.

## 2. Problem solving process

합성수를 찾기 위한 문제를 해결하기 위해서는, 먼저 합성수의 정의를 명확히 이해하는 것이 중요합니다. 합성수는 1과 자기 자신을 제외하고 적어도 하나 이상의 다른 약수를 가지는 수입니다.

이 문제를 해결하기 위해서는 자연수 n 이하의 모든 숫자에 대해 각 숫자의 약수 개수를 구하고, 그 중 약수의 개수가 3개 이상인 숫자를 합성수로 판별해야 합니다.

구체적으로, 2부터 n까지의 숫자에 대해 반복문을 사용하여 각각의 숫자의 약수를 확인합니다. 이때 또 다른 반복문을 통해 해당 숫자의 약수 개수를 계산합니다. 만약 어떤 숫자의 약수 개수가 3개 이상이라면, 그 숫자는 합성수로 간주되며, 합성수의 개수를 세는 변수를 증가시킵니다.

최종적으로 이 변수의 값이 n 이하의 합성수의 개수가 되어, 결과로 반환됩니다.

## 3. Answer

```java
class Solution {
  public int solution(int n) {
    int answer = 0;

    // 2부터 n까지의 수에 대해 합성수 여부를 판단
    for (int i = 2; i <= n; i++) {
      int divisorCount = 0;

      // i의 약수 개수를 센다
      for (int j = 1; j <= i; j++) {
        if (i % j == 0) {
          divisorCount++;
        }
      }

      // 약수 개수가 3개 이상이면 합성수이다
      if (divisorCount >= 3) {
        answer++;
      }
    }

    return answer;
  }
}
```

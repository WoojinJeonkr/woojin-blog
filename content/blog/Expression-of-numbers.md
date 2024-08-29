---
external : false
title : "Expression of numbers"
tag : [Programmers, Java]
date : 2024-08-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12924)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 주어진 자연수 n을 연속된 자연수의 합으로 표현하는 방법의 수를 구하는 것입니다. 이를 해결하기 위해서는 연속된 자연수의 합이 n이 되는 경우를 찾아야 합니다. 연속된 자연수의 합은 수열의 첫 번째 숫자 a와 수열의 길이 l을 이용해 표현할 수 있습니다. 수열의 합은 a + (a + 1) + (a + 2) + ... + (a + l - 1)로 나타나며, 이를 정리하면 (l * (2a + l - 1)) / 2 = n이라는 식을 얻을 수 있습니다.

따라서 n에 대해 이 방정식을 만족하는 l과 a의 값을 찾아야 합니다. 이 과정에서 l의 값을 1부터 차례대로 증가시키면서 가능한 a 값을 계산하고, 이 a가 자연수인지 확인해야 합니다. a가 자연수일 때 해당 l과 a의 조합이 n을 표현할 수 있는 하나의 방법이 됩니다. 이 조건을 만족하는 경우를 세어주면 문제를 해결할 수 있습니다. 전체적인 시간 복잡도는 O(n^(1/2))로, n이 10,000 이하일 때 효율적으로 동작합니다.

## 3. Answer

```java
class Solution {
  public int solution(int n) {
    int answer = 0;
    
    // l은 연속된 숫자의 개수, l은 1부터 차례대로 증가시킴
    for (int l = 1; l * (l + 1) / 2 <= n; l++) {
      // (n - l * (l - 1) / 2) % l == 0 이면 a가 자연수
      if ((n - l * (l - 1) / 2) % l == 0) {
        answer++;
      }
    }
    
    return answer;
  }
}
```

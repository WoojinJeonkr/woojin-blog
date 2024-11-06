---
external : false
title : "Finding the remainder 1"
tag : [Programmers, Java]
date : 2024-11-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/87389)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 찾는 문제입니다. 이를 해결하기 위한 접근 방법은 다음과 같습니다.

먼저, n을 어떤 자연수 x로 나누었을 때 나머지가 1이 되려면, n % x == 1이어야 합니다. 따라서, x가 2부터 시작해서 n-1까지 순차적으로 증가하며, 이 조건을 만족하는 첫 번째 x를 찾으면 됩니다.

이 문제에서 중요한 점은, 조건을 만족하는 가장 작은 x를 찾는 것이기 때문에, x를 순차적으로 확인하면서 조건을 만족하는 값을 바로 반환해야 합니다.

x가 2부터 시작하는 이유는 x = 1일 경우, n % 1은 항상 0이기 때문에 해당 조건을 만족할 수 없기 때문입니다.

따라서, x는 2부터 시작하여, n보다 작은 값까지 반복하면서, n % x == 1인 가장 작은 x를 찾아 반환합니다. 만약 이러한 x가 존재한다면 해당 값을 반환하고, 존재하지 않는다면 -1을 반환합니다.

## 3. Answer

```java
class Solution {
  public int solution(int n) {
    for (int x = 2; x < n; x++) {  // x는 2부터 n-1까지 반복
      if (n % x == 1) {  // n을 x로 나눈 나머지가 1이면
        return x;  // 해당 x를 반환
      }
    }
    return -1;  // 답이 없을 경우 (실제로 실행되지 않음)
  }
}
```

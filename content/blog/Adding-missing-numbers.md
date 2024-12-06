---
external : false
title : "Adding missing numbers"
tag : [Programmers, Java]
date : 2024-12-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/86051)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제를 해결하기 위해, 먼저 0부터 9까지의 숫자 합이 항상 일정하다는 점을 활용합니다. 0부터 9까지의 숫자의 합은 45로 주어진 배열에 포함된 숫자들의 합을 반복문을 통해 계산하고, 전체 합인 45에서 이를 차감하면 배열에 없는 숫자들의 합을 얻을 수 있습니다.

## 3. Answer

```java
class Solution {
  public int solution(int[] numbers) {
    int answer = 45; // 0부터 9까지의 합 (0 + 1 + 2 + ... + 9 = 45)

    for (int number : numbers) {
      answer -= number; // 배열에 있는 숫자들을 전체 합에서 차감
    }

    return answer; // 남은 값이 배열에 없는 숫자들의 합
  }
}
```

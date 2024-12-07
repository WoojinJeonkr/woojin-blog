---
external : false
title : "Zero sum trio"
tag : [Programmers, Java]
date : 2024-12-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131705)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제를 해결하기 위해 배열에서 세 숫자의 조합을 찾고 그 합이 0이 되는 경우를 계산해야 합니다. 이를 위해, 먼저 배열의 각 요소를 기준으로 반복문을 중첩하여 서로 다른 세 개의 숫자를 선택합니다. 선택된 숫자의 합을 계산하고, 합이 0일 경우 삼총사 조건에 맞으므로 카운트를 증가시킵니다. 모든 조합을 탐색한 후 조건을 만족하는 경우의 수를 최종적으로 반환하면 됩니다.

## 3. Answer

```java
class Solution {
  public int solution(int[] number) {
    int answer = 0;
    int n = number.length;

    // 배열에서 세 숫자의 조합을 찾기 위한 반복문
    for (int i = 0; i < n - 2; i++) {
      for (int j = i + 1; j < n - 1; j++) {
        for (int k = j + 1; k < n; k++) {
          // 세 숫자의 합이 0인지 확인
          if (number[i] + number[j] + number[k] == 0) {
            answer++;
          }
        }
      }
    }

    // 삼총사가 되는 경우의 수 반환
    return answer;
  }
}
```

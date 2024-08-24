---
external: false
title : "Star sequence"
tag : [Programmers, Java]
date : 2024-08-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/70130)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해 우선 주어진 배열에서 "스타 수열"이 무엇인지 정의하고 그 특성을 분석합니다. 스타 수열이란 길이가 2 이상이며 특정 조건을 만족하는 수열로, 배열 내의 부분 수열 중에서 길이가 가장 긴 스타 수열을 찾아야 합니다. 문제의 효율적인 해결을 위해, 배열 내에서 각 숫자가 등장하는 빈도를 계산하는 것이 중요합니다. 이 빈도 정보는 어떤 숫자를 중심으로 스타 수열을 만들 수 있는지를 판단하는 데 사용됩니다.

다음으로, 배열을 순회하며 특정 숫자를 중심으로 스타 수열을 형성할 수 있는지 확인합니다. 이때 중요한 점은 스타 수열을 구성할 때, 중심 숫자가 포함된 쌍들을 고려하되, 인접한 두 숫자가 같은 숫자가 아니어야 한다는 조건을 만족해야 한다는 것입니다. 배열을 한 번 순회하면서 특정 숫자를 중심으로 가능한 최대 길이의 스타 수열을 찾아냅니다. 이를 통해 각 숫자에 대해 스타 수열을 형성할 수 있는 최장 길이를 갱신하며, 최종적으로 가장 긴 스타 수열의 길이를 반환합니다.

## 3. Answer

```java
class Solution {
  public int solution(int[] a) {
    int n = a.length;
    if (n < 2) return 0;  // 배열의 길이가 2보다 작으면 스타 수열을 만들 수 없음

    int maxLength = 0;
    int[] frequency = new int[n];
    
    // 각 숫자의 빈도 계산
    for (int num : a) {
      frequency[num]++;
    }

    // 모든 숫자에 대해 최대 길이 스타 수열 계산
    for (int i = 0; i < n; i++) {
      if (frequency[i] == 0) continue;  // 해당 숫자가 배열에 존재하지 않으면 넘어감
      if (frequency[i] * 2 <= maxLength) continue;  // 현재 최대 길이보다 더 긴 스타 수열이 나올 수 없는 경우 건너뜀

      int length = 0;
      for (int j = 0; j < n - 1; j++) {
        // 인접한 두 수 중 하나가 i와 같고, 두 수가 서로 다른 경우에 스타 수열 가능
        if ((a[j] == i || a[j + 1] == i) && a[j] != a[j + 1]) {
          length += 2;
          j++;  // 다음 쌍으로 넘어감
        }
      }

      maxLength = Math.max(maxLength, length);  // 최대 길이 갱신
    }

    return maxLength;
  }
}
```

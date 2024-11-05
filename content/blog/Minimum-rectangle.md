---
external : false
title : "Minimum rectangle"
tag : [Programmers, Java]
date : 2024-11-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/86491)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해 먼저 모든 명함이 수납 가능한 최소 크기의 지갑을 만들기 위한 조건을 이해해야 합니다. 각 명함은 회전할 수 있으므로, 가로와 세로를 뒤집어가며 지갑에 넣을 수 있습니다. 따라서 각 명함의 길이 중 더 큰 값을 항상 가로로 두고, 더 작은 값을 세로로 두면 모든 명함이 적절히 회전되어 지갑에 수납됩니다.

모든 명함에 대해 이 과정을 수행하면서, 가장 큰 가로와 세로의 값을 추적하여 지갑의 최종 크기를 결정할 수 있습니다. 전체 명함 중 최대 가로 길이와 최대 세로 길이를 구한 후, 그 값을 곱하여 가장 작은 지갑의 면적을 반환하면 됩니다. 이를 통해 모든 명함이 수납될 수 있는 최소 크기의 지갑을 만들 수 있습니다.

## 3. Answer

```java
class Solution {
  public int solution(int[][] sizes) {
    int maxWidth = 0; // 가로 길이의 최댓값
    int maxHeight = 0; // 세로 길이의 최댓값

    for (int[] size : sizes) {
      // 각 명함의 가로와 세로 중 큰 값을 가로로, 작은 값을 세로로 설정
      int width = Math.max(size[0], size[1]);
      int height = Math.min(size[0], size[1]);

      // 현재까지의 최대 가로와 최대 세로 값 갱신
      maxWidth = Math.max(maxWidth, width);
      maxHeight = Math.max(maxHeight, height);
    }

    // 지갑의 최소 크기 계산
    return maxWidth * maxHeight;
  }
}
```

---
external : false
title : "Territory game"
tag : [Programmers, Java]
date : 2024-09-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12913)에서 확인하실 수 있습니다.

## 2. Problem solving process

위 문제를 해결하기 위해 동적 계획법을 활용하여 해결할 수 있습니다. 각 행의 각 칸에 대해, 그 이전 행에서 같은 열을 제외한 값들 중에서 가장 큰 값을 더해가며 최적의 경로를 찾는 방식입니다. 이 문제의 규칙에서, 같은 열을 연속해서 밟을 수 없다는 조건이 있으므로, 현재 행의 각 칸에 대해 이전 행의 다른 세 칸에서 최대값을 찾아 더해줍니다. 이를 통해 각 행의 각 칸에 도달하는 최적의 점수를 누적합니다.

첫 번째 행에서부터 시작하여 두 번째 행 이후부터 각 칸에 대해 가능한 경로를 계산합니다. 예를 들어, 두 번째 행의 첫 번째 칸을 밟는 경우, 첫 번째 행에서 두 번째, 세 번째, 네 번째 칸 중에서 최대값을 찾아 더해줍니다. 동일한 방식으로 각 칸에 대해 최댓값을 계산하여 누적한 후, 마지막 행에 도달했을 때, 해당 행의 네 칸 중에서 가장 큰 값을 반환합니다. 이를 통해 땅을 밟는 규칙을 준수하면서 얻을 수 있는 최대 점수를 구할 수 있습니다.

## 3. Answer

```java
class Solution {
  int solution(int[][] land) {
    int N = land.length; // 행의 개수

    // 각 행을 순회하면서 점수를 갱신해 나간다.
    for (int i = 1; i < N; i++) {
      // 이전 행에서 같은 열을 제외한 최대값을 더해나감
      land[i][0] += Math.max(land[i-1][1], Math.max(land[i-1][2], land[i-1][3]));
      land[i][1] += Math.max(land[i-1][0], Math.max(land[i-1][2], land[i-1][3]));
      land[i][2] += Math.max(land[i-1][0], Math.max(land[i-1][1], land[i-1][3]));
      land[i][3] += Math.max(land[i-1][0], Math.max(land[i-1][1], land[i-1][2]));
    }

    // 마지막 행에서 얻을 수 있는 최대값을 반환
    return Math.max(land[N-1][0], Math.max(land[N-1][1], Math.max(land[N-1][2], land[N-1][3])));
  }
}
```

---
external : false
title : "Archery competition"
tag : [Programmers, Java]
date : 2024-12-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/92342)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 라이언과 어피치가 특정 규칙에 따라 과녁에 화살을 쏘며 점수를 겨루는 게임에서, 라이언이 어피치를 이기기 위해 필요한 최적의 화살 분배 방식을 찾는 문제입니다. 라이언이 쏠 수 있는 화살의 개수는 정해져 있으며, 각 점수 영역에서 어피치보다 더 많은 화살을 쏘아야 해당 점수를 획득할 수 있습니다. 이때, 라이언의 총 점수가 어피치보다 높으면서, 점수 차이가 가장 큰 경우를 찾아야 합니다. 점수 차이가 같은 경우에는 더 낮은 점수부터 많이 맞힌 경우를 우선합니다.

문제를 해결하기 위해 가능한 모든 화살 분배 경우를 탐색하는 방법이 필요합니다. 이를 위해 깊이 우선 탐색(DFS)을 활용하여 각 점수 영역에서 화살을 쏠지 말지를 결정합니다. 탐색을 진행하면서 라이언의 점수와 어피치의 점수를 비교하여 현재 상태에서의 점수 차이를 계산합니다. 최적의 결과를 갱신하기 위해 점수 차이가 기존보다 크거나, 같더라도 조건에 따라 더 나은 경우를 판단해 업데이트합니다. 탐색을 완료한 후에도 라이언이 어피치를 이길 수 없는 경우에는 -1을 반환해야 합니다.

또한, 라이언이 모든 점수를 탐색하거나 화살을 모두 사용했을 때, 남은 화살은 무조건 0점에 배치하여 계산합니다. 이를 통해 모든 경우의 점수 계산이 완료되며, 최적의 해를 도출할 수 있습니다. 최종적으로 라이언의 최적 화살 분배를 반환하거나, 가능한 경우가 없을 경우 -1을 반환하는 방식으로 문제를 해결합니다.

## 3. Answer

```java
class Solution {
  // 라이언의 최적 점수 배열
  private int[] answer;
  // 점수 차이의 최대값
  private int maxDiff;

  public int[] solution(int n, int[] info) {
    // answer 배열 초기화
    answer = new int[11];
    // 현재 라이언의 점수를 저장할 임시 배열
    int[] temp = new int[11];
    // 점수 차이 초기화
    maxDiff = 0;

    // DFS를 이용하여 가능한 모든 경우 탐색
    dfs(0, n, info, temp);

    // 라이언이 이길 방법이 없는 경우
    if (maxDiff == 0) return new int[]{-1};
    return answer;
  }

  // DFS를 통해 가능한 화살 분배를 탐색
  private void dfs(int idx, int n, int[] info, int[] temp) {
    // 모든 점수를 탐색했거나 화살을 모두 사용한 경우
    if (idx == 11 || n == 0) {
      // 남은 화살을 0점(마지막 인덱스)에 모두 할당
      temp[10] += n;
      int ryan = 0, apeach = 0;

      // 점수 계산
      for (int i = 0; i <= 10; i++) {
        if (temp[i] > info[i]) ryan += 10 - i; // 라이언이 이긴 경우
        else if (info[i] > 0) apeach += 10 - i; // 어피치가 이긴 경우
      }

      int diff = ryan - apeach; // 점수 차이 계산
      // 점수 차이가 더 크거나, 점수 차이가 같을 경우 낮은 점수를 더 많이 맞힌 경우 선택
      if (diff > maxDiff || (diff == maxDiff && isBetter(temp, answer))) {
        maxDiff = diff;
        System.arraycopy(temp, 0, answer, 0, 11); // 최적 해 업데이트
      }
      temp[10] -= n; // 남은 화살 복구
      return;
    }

    // 현재 점수에 어피치보다 한 발 더 맞힐 수 있는 경우
    if (info[idx] < n) {
      temp[idx] = info[idx] + 1; // 어피치보다 한 발 더 사용
      dfs(idx + 1, n - temp[idx], info, temp); // 다음 점수로 이동
      temp[idx] = 0; // 상태 복구
    }

    // 현재 점수를 포기하고 다음 점수로 이동
    dfs(idx + 1, n, info, temp);
  }

  // 더 낮은 점수를 많이 맞힌 경우를 판단
  private boolean isBetter(int[] temp, int[] answer) {
    for (int i = 10; i >= 0; i--) {
      if (temp[i] != answer[i]) return temp[i] > answer[i];
    }
    return false;
  }
}
```

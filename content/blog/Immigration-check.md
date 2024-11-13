---
external : false
title : "Immigration check"
tag : [Programmers, Java]
date : 2024-11-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/43238)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 입국 심사대의 처리 시간을 최적화하여 모든 사람이 심사를 받는 데 걸리는 시간을 최소화하는 것입니다. 이를 위해 우리는 이분 탐색을 활용하여 최적의 시간을 찾아가는 접근법을 사용합니다.

먼저, 가능한 시간의 범위를 설정합니다. 최솟값은 1분, 최댓값은 가장 느린 심사관이 모든 사람을 처리하는 데 걸리는 시간입니다. 이렇게 하면 이 범위 내에서 최소 시간을 찾아갈 수 있습니다. 탐색을 시작하면 중간값을 계산하여 주어진 시간 동안 심사관들이 몇 명을 처리할 수 있는지를 평가합니다. 각 심사관별로 mid 시간 동안 처리할 수 있는 인원은 mid / 심사 시간으로 계산할 수 있으며, 이를 모두 합산하여 총 처리 인원을 구합니다.

이렇게 계산된 총 인원이 입국 대기 인원 n보다 많거나 같으면, 현재 시간 내에 모든 사람이 심사를 받을 수 있으므로, 더 작은 시간에서도 가능할지 확인하기 위해 최댓값을 줄입니다. 반대로 총 인원이 n보다 작다면, 시간이 부족하다는 의미이므로 시간을 늘려 탐색 범위를 오른쪽으로 이동시킵니다. 이러한 과정을 반복하여 최소 시간을 찾아가면 됩니다.

## 3. Answer

```java
class Solution {
  public long solution(int n, int[] times) {
    long left = 1;  // 가능한 최소 시간
    long right = (long) n * getMaxTime(times);  // 가능한 최대 시간 (가장 오래 걸리는 심사관이 모든 사람을 처리할 때)
    long answer = right;  // 최솟값을 찾기 위해 초기값을 최대 시간으로 설정

    while (left <= right) {
      long mid = (left + right) / 2;  // 현재 중간 시간
      long total = getTotalPeople(mid, times);  // mid 시간 동안 심사할 수 있는 총 인원 수

      if (total >= n) {  // 모든 사람을 심사할 수 있는 경우
        answer = mid;  // 가능한 최소 시간을 갱신
        right = mid - 1;  // 더 적은 시간에 가능한지 확인하기 위해 범위를 줄임
      } else {  // 모든 사람을 심사할 수 없는 경우
        left = mid + 1;  // 시간을 늘려서 다시 확인
      }
    }

    return answer;  // 모든 사람이 심사를 받을 수 있는 최소 시간 반환
  }

  // 주어진 시간 동안 각 심사관이 처리할 수 있는 사람의 총합 계산
  private long getTotalPeople(long time, int[] times) {
    long total = 0;
    for (int t : times) {
      total += time / t;  // 각 심사관이 주어진 시간 동안 처리할 수 있는 사람 수를 더함
    }
    return total;
  }

  // 배열에서 가장 큰 심사 시간을 반환
  private int getMaxTime(int[] times) {
    int max = 0;
    for (int t : times) {
      if (t > max) {
        max = t;
      }
    }
    return max;
  }
}
```

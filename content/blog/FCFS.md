---
external : false
title : "FCFS"
tag : [Programmers, Java]
date : 2024-11-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12920)에서 확인하실 수 있습니다.

## 2. Problem solving process

작업을 처리하는 코어의 특성과 조건에 따라, 이 문제를 효율적으로 해결하려면 이분 탐색과 시뮬레이션을 결합한 방법이 적합합니다. 작업의 개수가 코어 수보다 적거나 같은 경우에는 각 작업을 초기 코어에 바로 배정하면 되므로 간단히 작업 번호를 반환합니다. 하지만 작업 개수가 더 많을 경우, 특정 시간까지 완료된 작업 수를 계산하고, 마지막 작업이 어떤 코어에서 처리되는지 정확히 판단해야 합니다.

이를 위해 이분 탐색을 사용하여 작업 완료 시간을 찾고, 해당 시간까지 각 코어에서 처리할 수 있는 작업 수를 계산합니다. 이때, 특정 시간 이전까지 완료된 작업 수를 기반으로 남은 작업 수를 추적하며, 동일한 시간에 작업이 가능한 코어들 중 남은 작업을 배정합니다. 마지막으로 남은 작업을 처리하는 코어를 결정하여 결과를 반환합니다.

## 3. Answer

```java
class Solution {
  public int solution(int n, int[] cores) {
    int coreCount = cores.length;

    // 작업 개수가 코어 수 이하인 경우, 바로 해당 작업 번호 반환
    if (n <= coreCount) {
      return n;
    }

    // 이분 탐색의 범위 설정
    long left = 0, right = (long) n * cores[0];
    long time = 0;

    // 이분 탐색으로 최소 작업 완료 시간을 찾음
    while (left <= right) {
      long mid = (left + right) / 2;
      long completed = 0;

      // 현재 시간까지 처리된 작업 개수를 계산
      for (int core : cores) {
        completed += mid / core + 1; // 각 코어는 바로 작업을 재시작 가능
      }

      if (completed >= n) {
        // 작업 수가 충분하면 시간을 줄임
        time = mid;
        right = mid - 1;
      } else {
        // 작업 수가 부족하면 시간을 늘림
        left = mid + 1;
      }
    }

    // 이전 시간까지 처리된 총 작업 개수 계산
    long totalJobs = 0;
    for (int core : cores) {
      totalJobs += (time - 1) / core + 1;
    }

    // 남은 작업 수 계산
    long remainingJobs = n - totalJobs;

    // 남은 작업을 시간 순서, 코어 번호 순서대로 처리
    for (int i = 0; i < coreCount; i++) {
      if (time % cores[i] == 0) {
        remainingJobs--;
        if (remainingJobs == 0) {
          return i + 1; // 코어 번호는 1부터 시작
        }
      }
    }

    return -1; // 기본적으로 도달하지 않는 부분
  }
}
```

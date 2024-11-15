---
external : false
title : "Overtime index"
tag : [Programmers, Java]
date : 2024-11-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12927)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 작업량을 최소화하는 전략을 세웠습니다. Demi가 남은 시간 동안 작업량을 줄이는 과정에서, 가장 큰 작업량을 우선적으로 처리하면 야근 피로도를 최소화할 수 있습니다. 따라서 이 문제는 "가장 큰 작업량을 반복적으로 줄이는 최적화" 문제로 볼 수 있습니다.

이를 구현하기 위해 작업량을 관리하는 데 효과적인 자료구조인 우선순위 큐를 사용했습니다. 우선순위 큐를 최대 힙으로 구성하여 작업량이 가장 큰 값부터 접근할 수 있도록 했습니다. 작업량 배열을 최대 힙에 추가한 뒤, 남은 시간을 소진할 때까지 가장 큰 작업량을 1씩 줄이는 작업을 반복합니다. 작업량이 줄어들 때마다 큐를 갱신하여 항상 현재 상태에서 가장 큰 작업량에 접근할 수 있도록 했습니다.

마지막으로, 작업량이 모두 처리된 후 남아 있는 작업량의 제곱합을 계산하여 최종 야근 피로도를 구했습니다. 이 과정은 작업량이 모두 0이 되거나 남은 시간이 소진될 때 종료됩니다. 이를 통해 최소 야근 피로도를 구할 수 있었습니다.

## 3. Answer

```java
import java.util.PriorityQueue;

class Solution {
  public long solution(int n, int[] works) {
    // 최대 힙을 구현하기 위한 우선순위 큐
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

    // 작업량을 최대 힙에 추가
    for (int work : works) {
      maxHeap.offer(work);
    }

    // 남은 n시간 동안 작업량 줄이기
    while (n > 0 && !maxHeap.isEmpty()) {
      int maxWork = maxHeap.poll(); // 가장 큰 작업량 추출
      if (maxWork > 0) {
        maxWork--; // 작업량 1 감소
        n--;       // 남은 시간 1 감소
        maxHeap.offer(maxWork); // 감소한 작업량 다시 큐에 추가
      }
    }

    // 남아 있는 작업량의 제곱합 계산
    long answer = 0;
    while (!maxHeap.isEmpty()) {
      int work = maxHeap.poll();
      answer += (long) work * work; // 작업량의 제곱을 결과에 더함
    }

    return answer; // 최소 야근 피로도 반환
  }
}
```

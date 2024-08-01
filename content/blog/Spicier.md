---
external : false
title : "Spicier"
tag : [Programmers, Java]
date : 2024-08-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42626)에서 확인하실 수 있습니다.

## 2. Solution

이 문제를 해결하기 위해서는 최소 힙을 사용하여 스코빌 지수가 가장 낮은 두 개의 음식을 반복적으로 합쳐 나가야 합니다. 이를 통해 효율적으로 가장 낮은 스코빌 지수를 가진 음식 두 개를 쉽게 찾고, 새로운 음식을 생성하여 다시 힙에 넣을 수 있습니다. 최종적으로 모든 음식의 스코빌 지수가 K 이상이 되는지 확인하고, 불가능할 경우 -1을 반환해야 합니다.

## 3. Answer

```java
import java.util.PriorityQueue;

class Solution {
  public int solution(int[] scoville, int K) {
  int answer = 0;
  PriorityQueue<Integer> minHeap = new PriorityQueue<>();
  
  // 힙 초기화
  for (int num : scoville) {
    minHeap.offer(num);
  }

  while (minHeap.size() > 1 && minHeap.peek() < K) {
    // 가장 스코빌 지수가 낮은 두 개의 음식을 꺼냄
    int first = minHeap.poll();
    int second = minHeap.poll();

    // 새로운 음식을 생성
    int newScoville = first + (second * 2);
    minHeap.offer(newScoville);

    // 섞은 횟수 증가
    answer++;
  }
  
    // 모든 음식의 스코빌 지수가 K 이상인지 확인
    return minHeap.peek() >= K ? answer : -1;
  }
}
```

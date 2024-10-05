---
external : false
title : "Equalizing two queue sums"
tag : [Programmers, Java]
date : 2024-10-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/118667)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 두 개의 큐에서 원소를 추출하고 다른 큐에 삽입하는 작업을 통해 각 큐의 합을 같게 만드는 최소 작업 횟수를 구하는 문제입니다. 각 큐는 배열로 표현되며, 큐의 기본 동작인 FIFO(First In, First Out)에 따라 먼저 들어간 원소가 먼저 추출됩니다. 따라서 문제 해결을 위해서는 각 큐의 합을 유지하면서 원소를 이동하는 과정을 효율적으로 처리해야 합니다.

먼저, 두 큐의 총합을 계산하고 그 총합이 홀수인 경우는 큐의 합을 같게 만들 수 없으므로 즉시 -1을 반환해야 합니다. 총합이 짝수라면, 두 큐의 합을 절반으로 맞추는 것이 목표가 됩니다. 두 큐의 원소 이동을 위해서는 투 포인터 방식을 사용할 수 있으며, 이는 큐에서 원소를 꺼내 다른 큐로 옮기는 동작을 반복하면서 각 큐의 합을 조정하는 과정입니다.

원소 이동을 반복하면서 각 큐의 합이 같아지는 순간이 나오면 그때까지의 작업 횟수를 반환합니다. 이때 큐의 길이가 최대 300,000이므로 무한 루프에 빠지지 않도록 최대 작업 횟수를 제한해야 합니다. 두 큐의 모든 원소를 이동할 수 있는 최대 횟수는 큐 길이의 4배가 되므로, 이 범위 내에서 결과를 찾지 못하면 -1을 반환합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int solution(int[] queue1, int[] queue2) {
    int n = queue1.length; // 두 큐의 길이

    long sum1 = 0, sum2 = 0, totalSum = 0; // 각 큐의 합과 총합을 저장할 변수
    Queue<Integer> q1 = new LinkedList<>(); // queue1을 위한 큐
    Queue<Integer> q2 = new LinkedList<>(); // queue2를 위한 큐

    // queue1의 모든 원소를 큐에 추가하고 sum1에 합을 누적
    for (int num : queue1) {
      q1.offer(num);
      sum1 += num;
    }
    // queue2의 모든 원소를 큐에 추가하고 sum2에 합을 누적
    for (int num : queue2) {
      q2.offer(num);
      sum2 += num;
    }

    totalSum = sum1 + sum2; // 두 큐의 합을 구함

    // 총합이 홀수인 경우, 두 큐의 합을 같게 만들 수 없으므로 -1 반환
    if (totalSum % 2 != 0) {
      return -1;
    }

    long target = totalSum / 2; // 각 큐의 합을 목표로 하는 값

    int maxOperations = n * 4; // 최대 작업 횟수 (각 큐를 두 번 순회할 수 있는 횟수)
    int operations = 0; // 작업 횟수 카운트

    // 최대 작업 횟수 내에서 큐의 합을 같게 만드는지 확인
    while (operations <= maxOperations) {
      // 두 큐의 합이 같으면 작업 횟수 반환
      if (sum1 == target) {
        return operations;
      }

      // queue1의 합이 더 크면 queue1에서 원소를 꺼내 queue2로 이동
      if (sum1 > target) {
        int num = q1.poll(); // queue1에서 원소 꺼냄
        sum1 -= num; // queue1의 합에서 해당 원소 값 빼기
        sum2 += num; // queue2의 합에 해당 원소 값 더하기
        q2.offer(num); // queue2에 해당 원소 추가
      } 
      // queue2의 합이 더 크면 queue2에서 원소를 꺼내 queue1으로 이동
      else {
        int num = q2.poll(); // queue2에서 원소 꺼냄
        sum2 -= num; // queue2의 합에서 해당 원소 값 빼기
        sum1 += num; // queue1의 합에 해당 원소 값 더하기
        q1.offer(num); // queue1에 해당 원소 추가
      }

      operations++; // 작업 횟수 증가
    }

    // 작업을 완료할 수 없는 경우 -1 반환
    return -1;
  }
}
```

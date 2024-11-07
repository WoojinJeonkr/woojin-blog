---
external : false
title : "Array of divisible numbers"
tag : [Programmers, Java]
date : 2024-11-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12910)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해서는, 먼저 주어진 배열에서 특정 divisor로 나누어떨어지는 원소들을 찾아내고, 그 원소들이 없을 때는 특별한 처리로 -1을 반환해야 합니다. 나누어 떨어지는 원소가 존재하는 경우, 이를 오름차순으로 정렬한 배열로 반환하는 것이 목표입니다.

우선, 배열을 순회하면서 각 원소가 divisor로 나누어 떨어지는지를 확인합니다. 만약 나누어떨어지는 원소가 있다면, 이를 결과 배열에 저장할 준비를 합니다. 나누어떨어지는 원소가 하나도 없다면, 문제의 요구사항에 맞게 -1을 배열로 반환해야 합니다.

원소를 배열에 저장한 후에는 이를 오름차순으로 정렬합니다. 이때 기본적으로 선택 정렬과 같은 간단한 정렬 알고리즘을 활용하여 값을 작은 순서대로 정렬합니다. 최종적으로, 조건에 맞게 준비된 배열을 반환하여 문제를 해결할 수 있습니다.

## 3. Answer

```java
class Solution {
  public int[] solution(int[] arr, int divisor) {
    int count = 0;

    // arr 배열에서 divisor로 나누어 떨어지는 원소의 개수를 계산합니다.
    for (int num : arr) {
      if (num % divisor == 0) {
        count++;
      }
    }

    // 나누어 떨어지는 원소가 없으면 -1을 담은 배열을 반환합니다.
    if (count == 0) {
      return new int[] {-1};
    }

    // 나누어 떨어지는 원소의 개수만큼 배열을 생성합니다.
    int[] answer = new int[count];
    int index = 0;

    // divisor로 나누어 떨어지는 원소들을 answer 배열에 저장합니다.
    for (int num : arr) {
      if (num % divisor == 0) {
        answer[index++] = num;
      }
    }

    // answer 배열을 오름차순으로 정렬합니다 (선택 정렬 사용).
    for (int i = 0; i < answer.length - 1; i++) {
      for (int j = i + 1; j < answer.length; j++) {
        if (answer[i] > answer[j]) {
          // 두 원소를 교환하여 작은 값이 앞에 오도록 합니다.
          int temp = answer[i];
          answer[i] = answer[j];
          answer[j] = temp;
        }
      }
    }

    return answer;
  }
}
```

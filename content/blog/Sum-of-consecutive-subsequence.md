---
external : false
title : "Sum of consecutive subsequence"
tag : [Programmers, Java]
date : 2024-10-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/178870)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 비내림차순으로 정렬된 수열에서 합이 특정 값 k가 되는 연속된 부분 수열을 찾는 문제입니다. 가장 중요한 조건은 여러 개의 부분 수열이 존재할 경우, 가장 짧은 길이의 수열을 선택하고, 그 중에서도 앞쪽에 위치한 수열을 반환해야 한다는 점입니다.

이 문제를 해결하기 위한 적절한 방법은 슬라이딩 윈도우 기법을 사용하는 것입니다. 슬라이딩 윈도우란, 배열에서 두 포인터를 사용해 현재 범위(윈도우)를 나타내며, 포인터를 움직여 윈도우를 확장하거나 축소하는 방식입니다. 먼저 두 포인터를 배열의 시작 부분에 놓고, 현재 윈도우 내의 합이 목표값 k와 일치할 때까지 오른쪽 포인터를 이동시켜 윈도우를 확장합니다. 윈도우의 합이 k와 일치하면, 해당 부분 수열의 길이를 기록하고, 기존에 기록된 부분 수열의 길이와 비교하여 더 짧은 수열이 발견되면 그 수열로 갱신합니다. 합이 k보다 커지는 경우에는 왼쪽 포인터를 이동시켜 윈도우를 축소하며, 다시 합이 k가 될 때까지 조정합니다. 이 과정을 배열의 끝까지 반복하면서 가장 짧은 길이의 부분 수열을 찾아냅니다.

## 3. Answer

```java
class Solution {
  public int[] solution(int[] sequence, int k) {
    int n = sequence.length;
    int left = 0, right = 0;
    int sum = sequence[0];
    int minLength = Integer.MAX_VALUE;
    int[] answer = new int[2];
    
    while (right < n) {
      if (sum == k) {
        // 부분 수열의 길이가 더 짧으면 갱신
        if (right - left < minLength) {
          minLength = right - left;
          answer[0] = left;
          answer[1] = right;
        }
        // 왼쪽 포인터를 이동하여 윈도우 크기를 줄임
        sum -= sequence[left];
        left++;
      } else if (sum < k) {
        // 합이 k보다 작으면 오른쪽 포인터를 확장
        right++;
        if (right < n) {
          sum += sequence[right];
        }
      } else {
        // 합이 k보다 크면 왼쪽 포인터를 이동하여 윈도우 크기를 줄임
        sum -= sequence[left];
        left++;
      }
    }
    
    return answer;
  }
}
```

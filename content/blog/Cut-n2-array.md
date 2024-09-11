---
external : false
title : "Cut n2 array"
tag: [Programmers, Java]
date : 2024-09-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/87390)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 n x n 크기의 행렬을 직접 생성하지 않고, 필요한 값을 효율적으로 계산하는 방법을 사용할 수 있습니다. 이때 중요한 점은 행렬의 각 요소가 해당 위치에 따라 계산될 수 있다는 것입니다.

행렬에서 i행 j열에 위치한 값은 max(i, j) + 1로 나타낼 수 있습니다. 이는 행과 열 중 더 큰 값에 1을 더한 것이 해당 위치의 값이라는 의미입니다. 따라서, 행렬을 실제로 만들지 않고도 특정 위치에 있는 값을 빠르게 구할 수 있습니다.

이 문제에서 필요한 부분은 행렬에서 특정 구간 [left, right]에 해당하는 1차원 배열을 구하는 것입니다. 이를 위해 각 인덱스를 행(i)과 열(j)로 변환해야 합니다. 인덱스 i는 i / n으로 행을, i % n으로 열을 계산할 수 있습니다. 그 후, 해당 위치의 값을 max(i, j) + 1로 계산하여 결과 배열에 저장합니다.

이러한 방식으로 left부터 right까지의 값을 직접 계산하고, 이를 배열에 저장한 후 반환하면 됩니다. 이를 통해 행렬을 완전히 생성하지 않고도 문제를 효율적으로 해결할 수 있습니다.

## 3. Answer

```java
class Solution {
  public int[] solution(int n, long left, long right) {
    int len = (int)(right - left + 1); // 결과 배열의 크기 계산
    int[] answer = new int[len]; // 결과를 저장할 배열
    
    for (long i = left; i <= right; i++) {
      int row = (int)(i / n); // i번째 원소가 몇 번째 행에 있는지 계산
      int col = (int)(i % n); // i번째 원소가 몇 번째 열에 있는지 계산
      answer[(int)(i - left)] = Math.max(row, col) + 1; // 해당 위치의 값을 계산하여 배열에 저장
    }
    
    return answer; // 최종 결과 배열 반환
  }
}
```

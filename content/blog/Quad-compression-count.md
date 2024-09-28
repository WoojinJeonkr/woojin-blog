---
external : false
title : "Quad compression count"
tag : [Programmers, Java]
date : 2024-09-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/68936)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 쿼드 트리 방식을 사용하여 2차원 배열을 재귀적으로 압축하는 문제입니다. 주어진 배열을 일정한 구역으로 나누어 각 구역이 모두 같은 값으로 이루어졌는지 확인하고, 동일한 값으로 이루어져 있으면 해당 구역을 하나의 값으로 압축합니다. 만약 구역 내 값이 동일하지 않다면, 해당 구역을 4등분하여 각 부분 구역에 대해 동일한 방식으로 압축을 시도합니다. 이를 통해 배열을 최대한 압축한 후, 최종적으로 남은 0과 1의 개수를 구하는 것이 목적입니다.

압축을 수행하기 위해 먼저, 주어진 배열의 특정 구역을 확인하고 그 구역이 모두 같은 값으로 이루어졌는지 판단하는 기능이 필요합니다. 이를 위해 배열의 특정 범위에 있는 값들을 순회하며, 값이 모두 동일한지 확인하는 함수가 필요합니다. 값이 모두 같으면 해당 값을 카운트하고, 다르다면 구역을 4개의 작은 구역으로 나누어 각 구역에 대해 다시 재귀적으로 같은 작업을 반복합니다. 이러한 방식으로 배열의 크기가 작아질 때까지 반복하여 각 구역이 모두 같은 값을 갖는지 확인하면서 압축을 진행합니다.

이 과정에서 0과 1의 개수를 추적하기 위해 배열을 사용하고, 모든 압축 작업이 완료되면 결과로 남은 0과 1의 개수를 반환합니다.

## 3. Answer

```java
class Solution {
  int[] answer = new int[2];
  
  public int[] solution(int[][] arr) {
    compress(arr, 0, 0, arr.length);  // 배열의 전체 크기에서 압축 시작
    return answer;
  }
  
  private void compress(int[][] arr, int row, int col, int size) {
    // 현재 구역이 모두 같은 값인지 확인
    if (isSameValue(arr, row, col, size)) {
      answer[arr[row][col]]++;  // 모든 값이 같다면 그 값을 answer에 반영
      return;
    }
    
    int newSize = size / 2;  // 크기를 절반으로 줄임
    
    // 4개의 부분으로 나누어 재귀 호출
    compress(arr, row, col, newSize);               // 왼쪽 위
    compress(arr, row, col + newSize, newSize);     // 오른쪽 위
    compress(arr, row + newSize, col, newSize);     // 왼쪽 아래
    compress(arr, row + newSize, col + newSize, newSize); // 오른쪽 아래
  }
  
  private boolean isSameValue(int[][] arr, int row, int col, int size) {
    int value = arr[row][col];  // 구역의 첫 번째 값을 기준으로 설정
    for (int i = row; i < row + size; i++) {
      for (int j = col; j < col + size; j++) {
        // 하나라도 다른 값이 있으면 false 반환
        if (arr[i][j] != value) {
          return false;
        }
      }
    }
    // 모두 같은 값이면 true 반환
    return true;
  }
}
```

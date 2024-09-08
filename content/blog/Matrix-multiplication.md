---
external : false
title : "Matrix multiplication"
tag : [Programmers, Java]
date : 2024-09-08
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12949)에서 확인하실 수 있습니다.

## 2. Problem solving process

행렬의 곱셈 문제에서는 먼저 두 행렬의 크기를 확인하고, 이를 바탕으로 결과 행렬의 크기를 결정합니다. 행렬의 곱셈이 가능하려면 첫 번째 행렬의 열의 개수와 두 번째 행렬의 행의 개수가 같아야 하며, 결과 행렬은 첫 번째 행렬의 행 개수와 두 번째 행렬의 열 개수를 가지게 됩니다.

곱셈은 첫 번째 행렬의 각 행에 대해 두 번째 행렬의 각 열을 순차적으로 순회하면서 진행됩니다. 대응하는 원소들을 곱한 후 그 값을 모두 더해 해당 위치의 결과 값을 계산합니다. 이 과정은 반복문을 통해 구현되며, 첫 번째 행렬의 행과 두 번째 행렬의 열, 그리고 이 두 행렬의 대응 원소들을 차례로 반복하여 처리합니다.

이렇게 계산된 값들이 결과 행렬의 각 원소에 저장되며, 모든 연산이 완료되면 최종적인 결과 행렬을 반환합니다.

## 3. Answer

```java
class Solution {
  public int[][] solution(int[][] arr1, int[][] arr2) {
    int row1 = arr1.length;      // arr1의 행의 길이
    int col1 = arr1[0].length;   // arr1의 열의 길이
    int row2 = arr2.length;      // arr2의 행의 길이
    int col2 = arr2[0].length;   // arr2의 열의 길이

    // 결과 배열의 크기는 arr1의 행과 arr2의 열에 의해 결정됨
    int[][] answer = new int[row1][col2];

    // 행렬의 곱셈을 수행
    for (int i = 0; i < row1; i++) {  // arr1의 각 행에 대해 반복
      for (int j = 0; j < col2; j++) {  // arr2의 각 열에 대해 반복
        for (int k = 0; k < col1; k++) {  // arr1의 열과 arr2의 행을 순회하면서 곱셈 수행
          answer[i][j] += arr1[i][k] * arr2[k][j];
        }
      }
    }

    return answer;  // 결과 배열 반환
  }
}
```

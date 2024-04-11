---
external : false
title : "Forming a Magic Square"
tag : [Hackerrank, Java]
date : 2024-04-11
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/magic-square-forming/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
/*
  * 'formingMagicSquare' 함수를 완성하세요.
  *
  * 이 함수는 INTEGER를 반환해야 합니다.
  * 이 함수는 2D_INTEGER_ARRAY s를 매개변수로 받습니다.
  */

public static int formingMagicSquare(List<List<Integer>> s) {
  // 여기에 코드를 작성하세요.
  int[] answer = new int[8];
  int[][] square1 = {{8, 3, 4}, {1, 5, 9}, {6, 7, 2}};  // 가능한 마방진 1
  int[][] square2 = {{8, 1, 6}, {3, 5, 7}, {4, 9, 2}};  // 가능한 마방진 2
  int[][] square3 = {{4, 3, 8}, {9, 5, 1}, {2, 7, 6}};  // 가능한 마방진 3
  int[][] square4 = {{6, 1, 8}, {7, 5, 3}, {2, 9, 4}};  // 가능한 마방진 4
  int[][] square5 = {{2, 7, 6}, {9, 5, 1}, {4, 3, 8}};  // 가능한 마방진 5
  int[][] square6 = {{2, 9, 4}, {7, 5, 3}, {6, 1, 8}};  // 가능한 마방진 6
  int[][] square7 = {{6, 7, 2}, {1, 5, 9}, {8, 3, 4}};  // 가능한 마방진 7
  int[][] square8 = {{4, 9, 2}, {3, 5, 7}, {8, 1, 6}};  // 가능한 마방진 8

  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      answer[0] += Math.abs(s.get(i).get(j) - square1[i][j]);  // 첫 번째 마방진과의 차이 계산
      answer[1] += Math.abs(s.get(i).get(j) - square2[i][j]);  // 두 번째 마방진과의 차이 계산
      answer[2] += Math.abs(s.get(i).get(j) - square3[i][j]);  // 세 번째 마방진과의 차이 계산
      answer[3] += Math.abs(s.get(i).get(j) - square4[i][j]);  // 네 번째 마방진과의 차이 계산
      answer[4] += Math.abs(s.get(i).get(j) - square5[i][j]);  // 다섯 번째 마방진과의 차이 계산
      answer[5] += Math.abs(s.get(i).get(j) - square6[i][j]);  // 여섯 번째 마방진과의 차이 계산
      answer[6] += Math.abs(s.get(i).get(j) - square7[i][j]);  // 일곱 번째 마방진과의 차이 계산
      answer[7] += Math.abs(s.get(i).get(j) - square8[i][j]);  // 여덟 번째 마방진과의 차이 계산
    }
  }
  Arrays.sort(answer);  // 계산된 차이를 오름차순으로 정렬
  return answer[0];  // 가장 작은 차이를 반환
}
```

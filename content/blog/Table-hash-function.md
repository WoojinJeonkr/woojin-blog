---
external : false
title : "Table hash function"
tag : [Programmers, Java]
date : 2024-10-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/147354)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해서는 먼저 주어진 테이블을 col번째 컬럼을 기준으로 오름차순으로 정렬해야 합니다. 이때, 만약 해당 컬럼의 값이 동일하다면 첫 번째 컬럼을 기준으로 내림차순 정렬을 수행합니다. 정렬된 데이터를 바탕으로 주어진 범위인 row_begin부터 row_end까지의 각 행에 대해 S_i 값을 계산합니다. S_i는 해당 행의 각 값들을 그 행의 번호로 나눈 나머지들의 합으로 정의되며, 이를 통해 각 행에 대한 값을 얻을 수 있습니다.

이후 계산된 모든 S_i 값을 bitwise XOR 연산을 통해 누적하여 최종 해시 값을 구합니다. XOR 연산은 각 행의 결과를 순차적으로 결합해 나가면서 중복된 값은 제거되고, 고유한 결과를 얻게 하는 역할을 합니다. 최종적으로 이렇게 계산된 해시 값을 반환하는 방식으로 문제를 해결합니다.

## 3. Answer

```java
import java.util.Arrays;

class Solution {
  public int solution(int[][] data, int col, int row_begin, int row_end) {
    // 1. col번째 컬럼을 기준으로 오름차순 정렬
    // 값이 동일한 경우 첫 번째 컬럼을 기준으로 내림차순 정렬
    Arrays.sort(data, (a, b) -> {
      if (a[col - 1] == b[col - 1]) {
        return b[0] - a[0]; // 첫 번째 컬럼을 기준으로 내림차순
      } else {
        return a[col - 1] - b[col - 1]; // col번째 컬럼을 기준으로 오름차순
      }
    });

    int answer = 0;

    // 2. row_begin부터 row_end까지 각 행에 대해 S_i 계산 후 XOR 연산
    for (int i = row_begin - 1; i < row_end; i++) {
      int Si = 0;
      // 각 값에 대해 (i + 1)로 나눈 나머지를 더함
      for (int val : data[i]) {
        Si += val % (i + 1);
      }
      // 3. S_i 값을 XOR 연산
      answer ^= Si;
    }

    // 최종 해시 값 반환
    return answer;
  }
}
```

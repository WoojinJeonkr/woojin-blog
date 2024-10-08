---
external : false
title : "Hailstone Sequence Integration"
tag : [Programmers, Java]
date : 2024-10-08
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/134239)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 콜라츠 추측에 기반한 우박수열을 사용하여 특정 구간에 대한 정적분을 계산하는 문제입니다. 먼저, 주어진 초항 k를 통해 콜라츠 수열을 생성하고, 이 수열에서 각 인접한 값들 사이의 면적을 계산해야 합니다. 각 면적은 두 값 사이에 있는 직사각형의 넓이로, 좌표 평면에서 꺾은선 그래프를 그리고 그 아래 면적을 구하는 방식입니다.

면적을 구한 후에는 주어진 범위 ranges에 따라 구간별로 정적분을 계산합니다. 범위는 시작점과 끝점으로 주어지며, 끝점은 음수로 주어질 수 있어 이를 수열의 길이를 기준으로 변환합니다.

만약 시작점이 끝점보다 크다면 유효하지 않은 구간이므로 -1을 반환하며, 유효한 구간에서는 그 사이에 있는 면적을 모두 더하여 정적분 결과를 반환합니다.

## 3. Answer

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
  public double[] solution(int k, int[][] ranges) {
    // 콜라츠 수열을 저장할 리스트
    List<Integer> collatz = new ArrayList<>();
    collatz.add(k);

    // 콜라츠 수열 생성
    while (k > 1) {
      if (k % 2 == 0) {
        k /= 2;
      } else {
        k = 3 * k + 1;
      }
      collatz.add(k);
    }

    // 각 구간의 면적을 계산 (인접한 두 값 사이의 면적)
    double[] areas = new double[collatz.size() - 1];
    for (int i = 0; i < collatz.size() - 1; i++) {
      areas[i] = (collatz.get(i) + collatz.get(i + 1)) / 2.0;
    }

    // 주어진 ranges에 맞게 정적분 결과를 계산
    double[] answer = new double[ranges.length];
    int n = areas.length;

    for (int i = 0; i < ranges.length; i++) {
      int a = ranges[i][0];
      int b = n + ranges[i][1]; // b가 음수로 주어졌으므로 n에서 빼줌

      // 유효하지 않은 구간인 경우 -1 반환
      if (a > b) {
        answer[i] = -1.0;
      } else {
        // 구간 내 면적 합산
        double sum = 0.0;
        for (int j = a; j < b; j++) {
          sum += areas[j];
        }
        answer[i] = sum;
      }
    }

    return answer;
  }
}
```

---
external : false
title : "Speed camera"
tag : [Programmers, Java]
date : 2024-11-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42884)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제를 탐욕법을 사용하려면 다음과 같은 절차를 통해 해결할 수 있습니다.

우선, 차량들이 고속도로를 이동하는 경로를 고속도로를 떠나는 지점(진출 지점) 기준으로 정렬합니다. 이렇게 하면 가장 먼저 고속도로를 떠나는 차량부터 순서대로 처리할 수 있습니다.

그다음으로는 정렬된 차량 경로를 하나씩 확인합니다. 현재 설치된 카메라가 해당 차량의 진입 지점을 포함하지 않는 경우, 새로운 카메라를 설치해야 합니다. 이때, 카메라를 해당 차량의 진출 지점에 설치하면 해당 지점을 포함하는 모든 차량을 감시할 수 있어 효율적입니다.

차량 경로를 모두 확인할 때까지 위 과정을 반복하며, 매번 카메라 설치 여부를 판단합니다. 이렇게 하면 모든 차량이 적어도 한 번은 카메라를 만나게 되고, 설치해야 하는 최소 카메라 개수를 구할 수 있습니다. 최종적으로, 필요한 카메라의 개수를 반환합니다.

## 3. Answer

```java
import java.util.Arrays;

class Solution {
  public int solution(int[][] routes) {
    // 차량의 진출 지점을 기준으로 오름차순 정렬
    Arrays.sort(routes, (a, b) -> Integer.compare(a[1], b[1]));

    int answer = 0; // 카메라 설치 개수
    int camera = Integer.MIN_VALUE; // 마지막으로 설치한 카메라의 위치

    for (int[] route : routes) {
      // 현재 카메라가 해당 차량의 경로를 커버하지 못하는 경우
      if (camera < route[0]) {
        answer++; // 새로운 카메라 설치
        camera = route[1]; // 현재 차량의 진출 지점에 카메라 설치
      }
    }

    return answer; // 최소 카메라 개수 반환
  }
}
```

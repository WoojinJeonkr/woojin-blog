---
external : false
title : "Repainting"
tag : [Programmers, Java]
date : 2024-11-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/161989)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 주어진 벽의 구역에서 페인트가 벗겨진 일부 구역을 최소한의 횟수로 덧칠하는 최적화 문제입니다. 이를 해결하기 위해 롤러로 칠할 수 있는 최대 구역을 활용하여 필요한 칠하기 횟수를 최소화하는 전략을 사용합니다.

우선, 롤러는 벽에서 벗어나지 않아야 하고 지정된 구역의 길이만큼만 칠할 수 있으므로, 주어진 구역 번호를 시작점으로 삼아 덧칠 구역을 계획해야 합니다. 여기서 중요한 점은 한 번의 롤러 칠로 칠할 수 있는 최대 범위를 고려하여 중복된 칠을 최소화하는 것입니다.

문제를 해결하기 위해, 페인트를 칠한 마지막 구역의 끝을 추적하는 변수를 활용합니다. 주어진 구역 배열을 순차적으로 탐색하면서, 만약 현재 구역 번호가 마지막으로 페인트칠한 구역의 범위를 벗어날 경우, 새로운 칠하기 작업이 필요하다는 의미로 받아들이고, 현재 구역을 기준으로 롤러의 길이만큼 덧칠을 진행합니다. 그리고 덧칠 횟수를 1회 증가시키며, 마지막으로 칠한 범위의 끝을 최신화합니다.

이렇게 배열의 끝까지 반복을 마치면 모든 구역에 최소 횟수로 페인트가 덧칠되며, 최종적으로 필요한 최소 덧칠 횟수를 반환하게 됩니다.

## 3. Answer

```java
class Solution {
  public int solution(int n, int m, int[] section) {
    int answer = 0; // 페인트 칠 횟수를 저장할 변수
    int paintEnd = 0; // 마지막으로 페인트칠된 구역의 끝 번호
    
    for (int i = 0; i < section.length; i++) {
      // 현재 구역(section[i])이 이전에 칠한 구역의 끝(paintEnd)보다 클 경우
      if (section[i] > paintEnd) {
        paintEnd = section[i] + m - 1; // 새로운 롤러로 칠할 구역의 끝 범위 설정
        answer++; // 페인트 칠 횟수 증가
      }
    }
    
    return answer; // 최소 페인트 칠 횟수 반환
  }
}
```

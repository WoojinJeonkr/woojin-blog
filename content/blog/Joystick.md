---
external : false
title : "Joystick"
tag : [Programmers, Java]
date : 2024-10-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42860)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 조이스틱을 사용하여 문자열의 각 문자를 'A'에서 목표 알파벳으로 변경하고, 그 과정에서 최소한의 조작 횟수를 구하는 문제입니다. 이를 해결하기 위해서는 먼저 알파벳을 변경하는 데 필요한 조작 횟수와 커서를 이동하는 최소 횟수를 계산해야 합니다. 알파벳 변경의 경우, 각 문자는 'A'에서부터 출발하여 위쪽(▲) 또는 아래쪽(▼)으로 이동할 수 있습니다. 따라서, 위쪽으로 이동하는 거리와 아래쪽으로 이동하는 거리 중 더 작은 값을 선택하여 각 문자를 'A'에서 목표 알파벳으로 변경하는 데 필요한 최소 조작 횟수를 계산할 수 있습니다.

커서 이동은 문자열을 순차적으로 탐색하면서 필요 없는 연속된 'A'를 가능한 한 건너뛰도록 설계하는 것이 핵심입니다. 기본적으로는 커서를 오른쪽 끝까지 이동하는 것이지만, 중간에 연속된 'A'가 있을 경우 이를 건너뛰기 위해 왼쪽으로 돌아가는 경우를 고려해야 합니다. 즉, 커서를 앞으로 계속 이동하는 것과 뒤로 돌아가는 것 중 더 효율적인 방법을 선택하여 최소 이동 거리를 계산해야 합니다.

## 3. Answer

```java
class Solution {
  public int solution(String name) {
    int answer = 0;
    int length = name.length();

    // 1. 각 알파벳을 변경하는 데 필요한 최소 조작 횟수 계산
    for (int i = 0; i < length; i++) {
      char c = name.charAt(i);
      answer += Math.min(c - 'A', 'Z' - c + 1);
    }

    // 2. 커서 이동 최소 거리 계산
    int move = length - 1; // 커서를 오른쪽 끝까지 이동하는 경우
    for (int i = 0; i < length; i++) {
      int next = i + 1;
      
      // 'A'가 연속된 구간을 찾기
      while (next < length && name.charAt(next) == 'A') {
        next++;
      }

      // 오른쪽으로 가는 경우와 왼쪽으로 돌아가는 경우 중 최소 이동 계산
      move = Math.min(move, i + length - next + Math.min(i, length - next));
    }

    // 총 조작 횟수 = 알파벳 변경 횟수 + 커서 이동 횟수
    answer += move;
    return answer;
  }
}
```

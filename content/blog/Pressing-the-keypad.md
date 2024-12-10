---
external : false
title : "Pressing the keypad"
tag : [Programmers, Java]
date : 2024-12-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/67256)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제를 해결하기 위해서는 먼저 키패드의 구조를 이해하고, 각 번호를 눌렀을 때 어떤 손가락을 사용할지 결정하는 규칙을 명확히 정의해야 합니다. 키패드는 3x4 배열로 나타낼 수 있으며, 각 번호는 고유한 위치를 가집니다. 이를 기반으로 거리 계산이 필요하므로 키패드의 각 번호에 대한 좌표를 미리 정의해두는 것이 중요합니다. 초기 손가락 위치를 설정하고, 숫자를 순서대로 처리하면서 규칙에 따라 각 손가락의 위치를 업데이트해야 합니다.

왼쪽 열(1, 4, 7)과 오른쪽 열(3, 6, 9)은 각각 왼손과 오른손으로 고정되므로 처리하기 쉽습니다. 문제는 가운데 열(2, 5, 8, 0)로, 이 경우 왼손과 오른손의 현재 위치와 목표 번호의 위치 간의 거리를 비교해야 합니다. 거리가 같다면 주 사용 손(왼손잡이 또는 오른손잡이)에 따라 손가락을 선택합니다.

맨해튼 거리 계산을 사용하여 위치 간의 거리를 측정할 수 있습니다. 두 좌표 간의 거리 계산은 `|x1 - x2| + |y1 - y2|` 공식을 사용하면 됩니다. 입력 번호를 순서대로 처리하면서 손가락의 이동 규칙에 따라 결과를 기록하고, 마지막에 이를 하나의 문자열로 반환하는 방식으로 문제를 해결할 수 있습니다.

## 3. Answer

```java
class Solution {
  public String solution(int[] numbers, String hand) {
    // 키패드의 각 숫자 위치를 2차원 배열로 정의
    int[][] keypad = {
      {3, 1}, {0, 0}, {0, 1}, {0, 2},
      {1, 0}, {1, 1}, {1, 2},
      {2, 0}, {2, 1}, {2, 2}
    };

    // 초기 왼손 위치 (*), 오른손 위치 (#)
    int[] leftPos = {3, 0};
    int[] rightPos = {3, 2};
    String answer = ""; // 결과를 저장할 문자열

    // 입력받은 번호를 하나씩 처리
    for (int num : numbers) {
      if (num == 1 || num == 4 || num == 7) { // 왼쪽 열 숫자
        answer += "L";
        leftPos = keypad[num]; // 왼손 위치 갱신
      } else if (num == 3 || num == 6 || num == 9) { // 오른쪽 열 숫자
        answer += "R";
        rightPos = keypad[num]; // 오른손 위치 갱신
      } else { // 가운데 열 숫자
        int leftDist = getDistance(leftPos, keypad[num]); // 왼손 거리 계산
        int rightDist = getDistance(rightPos, keypad[num]); // 오른손 거리 계산

        if (leftDist < rightDist) { // 왼손이 가까운 경우
          answer += "L";
          leftPos = keypad[num];
        } else if (leftDist > rightDist) { // 오른손이 가까운 경우
          answer += "R";
          rightPos = keypad[num];
        } else { // 거리가 같은 경우
          if (hand.equals("left")) { // 왼손잡이일 때
            answer += "L";
            leftPos = keypad[num];
          } else { // 오른손잡이일 때
            answer += "R";
            rightPos = keypad[num];
          }
        }
      }
    }
    return answer; // 결과 반환
  }

  // 두 위치 간의 맨해튼 거리 계산 함수
  private int getDistance(int[] pos1, int[] pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
  }
}
```

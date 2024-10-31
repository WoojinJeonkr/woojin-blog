---
external : false
title : "String segmentation"
tag : [Programmers, Java]
date : 2024-10-31
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/140108)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해서는 문자열을 왼쪽에서 오른쪽으로 순차적으로 읽어가며 특정 조건에 따라 문자열을 분리해야 합니다. 먼저 문자열의 첫 번째 문자를 기준으로, 해당 문자와 다른 문자들이 등장하는 횟수를 각각 계산해 나갑니다. 두 문자 그룹의 횟수가 같아지는 순간을 찾아 문자열을 분리하고, 남은 문자열에 대해 같은 과정을 반복합니다. 문자열의 모든 글자를 다 읽을 때까지 이 과정을 진행하며, 매번 문자열을 분리할 때마다 카운터를 증가시켜 최종 분리된 문자열의 개수를 반환합니다.

이를 구현하기 위해서는, 주어진 문자열을 처음부터 순회하며 첫 글자를 기준으로 비교하면서 분리할 기준이 되는 두 개의 카운터(countX, countNotX)를 사용합니다. 두 카운터가 같아지면 문자열을 분리하고 카운터를 초기화하여 다시 진행합니다. 문자열을 모두 순회한 후에 만약 남은 문자들이 있다면 마지막으로 분리하여 개수를 추가하는 방식으로 최종 결과를 구할 수 있습니다.

## 3. Answer

```java
class Solution {
  public int solution(String s) {
    int answer = 0;          // 분해된 문자열의 개수를 저장할 변수
    int countX = 0;          // 현재 분할 중인 문자열에서 'x' 문자 개수
    int countNotX = 0;       // 'x'가 아닌 다른 문자 개수

    char x = s.charAt(0);    // 첫 번째 문자를 x로 설정

    // 문자열의 각 문자를 순차적으로 검사
    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) == x) {
        countX++;            // 현재 문자가 x와 같으면 countX 증가
      } else {
        countNotX++;         // x가 아닌 문자는 countNotX 증가
      }

      // x와 x가 아닌 글자의 개수가 같아지면 문자열을 분리
      if (countX == countNotX) {
        answer++;            // 분리할 문자열이 생기므로 answer 증가
        if (i + 1 < s.length()) {
          x = s.charAt(i + 1); // 다음 문자열의 첫 글자를 새로운 x로 설정
        }
        countX = 0;          // 다음 분할을 위해 countX와 countNotX 초기화
        countNotX = 0;
      }
    }

    // 남은 문자열이 있는 경우 answer에 추가
    if (countX != 0 || countNotX != 0) {
      answer++;
    }

    return answer;           // 최종 분리된 문자열 개수를 반환
  }
}
```

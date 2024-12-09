---
external : false
title : "Poorly designed keypad"
tag : [Programmers, Java]
date : 2024-12-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/160586)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 먼저 문제의 본질을 이해해야 합니다. 이 문제에서는 키보드 자판의 구성을 분석하여 주어진 문자열을 작성하는 데 필요한 최소 키 입력 횟수를 구해야 합니다. 따라서 문제를 접근하는 첫 단계는 키 입력 횟수를 효율적으로 계산할 수 있는 데이터 구조를 설계하는 것입니다.

첫 번째로 고려해야 할 점은 각 키에 할당된 문자의 입력 순서입니다. 자판에서 문자를 입력할 때 최소한의 키 입력 횟수를 구하려면, 각 문자가 어느 키에 있으며 몇 번째 눌러야 하는지를 추적해야 합니다. 이를 위해 키보드 구성 정보를 저장하기 위해 HashMap을 사용할 수 있습니다. 이 맵의 키는 문자, 값은 해당 문자를 입력하기 위해 필요한 최소 누르기 횟수가 됩니다.

두 번째 단계는 키보드 구성을 분석하여 맵을 채우는 과정입니다. 각 키맵 문자열에 대해 문자를 하나씩 확인하며, 이미 저장된 값과 비교하여 더 작은 입력 횟수를 저장합니다. 이렇게 하면 모든 키를 순회한 후 맵에는 각 문자의 최소 입력 횟수가 저장됩니다.

세 번째로, 작성하려는 문자열 각각에 대해 입력 가능 여부를 판단하고, 가능하다면 총 입력 횟수를 계산합니다. 여기서는 문자열의 각 문자를 순회하며 맵에 해당 문자가 존재하는지 확인합니다. 문자가 존재하지 않으면 해당 문자열은 작성할 수 없으므로 결과 배열에 -1을 저장합니다. 문자가 존재하면 맵에서 해당 문자의 입력 횟수를 가져와 누적합니다. 이 작업을 모든 문자열에 대해 반복하면 최종 결과 배열을 얻을 수 있습니다.

## 3. Answer

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
  public int[] solution(String[] keymap, String[] targets) {
    Map<Character, Integer> keyPressMap = new HashMap<>();

    // 각 키맵에 대해 문자를 최소 누르기 횟수로 저장
    for (int i = 0; i < keymap.length; i++) {
      String key = keymap[i];
      for (int j = 0; j < key.length(); j++) {
        char c = key.charAt(j);
        keyPressMap.put(c, Math.min(keyPressMap.getOrDefault(c, Integer.MAX_VALUE), j + 1));
      }
    }

    int[] answer = {};
    answer = new int[targets.length];

    // 각 target 문자열에 대해 키 입력 횟수 계산
    for (int i = 0; i < targets.length; i++) {
      String target = targets[i];
      int totalKeyPresses = 0;
      boolean isWritable = true;

      for (char c : target.toCharArray()) {
        // target에 포함된 문자가 keymap에 없으면 작성 불가
        if (!keyPressMap.containsKey(c)) {
          isWritable = false;
          break;
        }
        totalKeyPresses += keyPressMap.get(c);
      }

      // 작성 가능 여부에 따라 결과 저장
      answer[i] = isWritable ? totalKeyPresses : -1;
    }

    return answer;
  }
}
```

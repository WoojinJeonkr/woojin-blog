---
external : false
title : "Carpet"
tag : [Programmers, Java]
date : 2024-09-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42842)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해 먼저 전체 격자 수를 계산해야 합니다. 주어진 갈색 격자(brown)와 노란색 격자(yellow)의 수를 더하여 카펫의 전체 격자 수를 구합니다.

이후, 카펫의 세로 길이(height)를 3부터 시작하여 가능한 모든 세로 길이에 대해 반복합니다. 세로 길이가 증가할 때마다 전체 격자 수를 세로 길이로 나누어 가로 길이(width)를 계산합니다.

이때, 가로 길이와 세로 길이를 사용하여 갈색 격자의 수를 계산하고, 이 값이 주어진 갈색 격자 수와 일치하는지 확인합니다. 만약 일치한다면, 해당 가로와 세로 길이를 반환합니다.

## 3. Answer

```java
class Solution {
  public int[] solution(int brown, int yellow) {
    int totalTiles = brown + yellow;

    // height는 카펫의 세로 길이로, 최소 3부터 시작합니다
    for (int height = 3; height <= totalTiles / 3; height++) {
      // totalTiles가 height로 나누어 떨어지면 가로 길이(width)를 계산합니다.
      if (totalTiles % height == 0) {
        int width = totalTiles / height;
        
        // 테두리를 감싸는 갈색 격자의 수를 계산합니다
        int brownTiles = (width * 2) + (height * 2) - 4;
        
        // 계산된 갈색 격자의 수가 주어진 brown과 일치하면 가로와 세로 길이를 반환합니다
        if (brownTiles == brown) {
          return new int[]{width, height};
        }
      }
    }
    
    // 이 부분은 실행될 가능성이 거의 없지만, Java 컴파일러에서 함수의 반환형을 만족시키기 위해 필요합니다
    return new int[]{};
  }
}
```

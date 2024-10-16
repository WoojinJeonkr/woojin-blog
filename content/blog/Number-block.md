---
external : false
title : "Number block"
tag : [Programmers, Java]
date : 2024-10-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12923)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 도로의 길이가 최대 10억에 이르는 매우 큰 범위에서 블록들의 값을 효율적으로 계산해야 합니다. 문제의 핵심은, 각 숫자 n이 적힌 블록이 n의 배수 위치에 설치된다는 규칙에 집중해야 합니다. 예를 들어, 숫자 1이 적힌 블록은 2, 3, 4, ...번째 위치에 설치되고, 숫자 2는 4, 6, 8, ...번째에 설치됩니다. 따라서 특정 위치 i에 어떤 숫자가 설치될지를 결정하려면, i의 약수 중에서 가장 큰 값을 찾아내야 합니다.

효율적인 접근법은 각 위치에서 해당 숫자의 약수를 탐색한 후, 그중에서 가장 큰 값을 선택하되 바로 i번째 위치에 설치될 수 있는 블록의 숫자는 i / 2를 넘지 않아야 합니다. 예를 들어, i의 약수 중 가장 큰 값이 i / 2보다 크면, 해당 값을 선택할 수 없습니다. 따라서 약수를 구할 때 i / 2 이하인 값들만 고려해야 하며, 블록에 적힌 숫자는 10,000,000 이하로 제한되기 때문에 이 조건도 함께 고려해 블록 번호를 결정해야 합니다. 마지막으로, 첫 번째 위치는 예외적으로 항상 0이 설치된다는 점도 처리해야 합니다.

## 3. Answer

```java
class Solution {
  public int[] solution(long begin, long end) {
    int length = (int)(end - begin + 1);
    int[] answer = new int[length];

    for (long i = begin; i <= end; i++) {
      if (i == 1) {
        answer[(int)(i - begin)] = 0; // 1번째 블록은 항상 0
        continue;
      }

      answer[(int)(i - begin)] = 1;  // 기본값은 1
      for (long j = 2; j * j <= i; j++) {
        if (i % j == 0) {
          long pair = i / j;
          if (pair <= 10000000) {  // i / j가 10,000,000 이하인 경우
            answer[(int)(i - begin)] = (int)pair;
            break;
          }
          if (j <= 10000000) {  // j가 10,000,000 이하인 경우
            answer[(int)(i - begin)] = (int)j;
          }
        }
      }
    }

    return answer;
  }
}
```

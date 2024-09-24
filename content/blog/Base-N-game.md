---
external : false
title : "Base N game"
tag : [Programmers, Java]
date : 2024-09-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/17687)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 여러 사람이 순차적으로 숫자를 각 진법에 맞춰 말하는 게임에서, 튜브가 말해야 할 숫자를 미리 계산하는 프로그램을 만드는 것입니다. 먼저, 게임에서 사용될 숫자들을 모두 구하는 것이 중요합니다. 각 숫자를 주어진 진법으로 변환한 후, 이를 순서대로 문자열로 이어 붙입니다. 숫자는 0부터 시작해 하나씩 증가시키며, 이를 n진법으로 변환한 결과를 문자열로 저장합니다. 저장된 문자열의 길이가 튜브가 말할 숫자의 개수(t개)를 만족할 만큼 충분히 길어질 때까지, 계속해서 숫자를 추가로 변환합니다. 이때, 10 이상의 숫자는 A, B, C 등 대문자로 표시됩니다.

튜브가 말해야 하는 숫자는 전체 인원 중에서 자신의 차례에 해당하는 숫자를 추출하는 방식입니다. 튜브는 1부터 시작하는 순서를 가지고 있으므로, 이를 인덱스로 변환해 각 라운드마다 튜브가 말할 숫자를 계산합니다. 이렇게 구한 숫자들을 차례대로 문자열에 모아 출력하면, 튜브가 게임에서 말해야 할 t개의 숫자를 정확히 구할 수 있습니다.

## 3. Answer

```java
class Solution {
  public String solution(int n, int t, int m, int p) {
    StringBuilder answer = new StringBuilder();
    StringBuilder sequence = new StringBuilder();
    
    int number = 0;
    
    // 필요한 t * m 자리수 이상이 될 때까지 숫자를 n진법으로 변환하여 sequence에 추가
    while (sequence.length() < t * m) {
      sequence.append(Integer.toString(number++, n).toUpperCase());
    }
    
    // 튜브가 말해야 하는 숫자를 추출하여 answer에 추가 (1-based index)
    for (int i = 0; i < t; i++) {
      answer.append(sequence.charAt(i * m + (p - 1)));
    }
    
    return answer.toString();
  }
}
```

---
external : false
title : "2 or fewer differing bits"
tag : [Programmers, Java]
date : 2024-10-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/77885)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 주어진 양의 정수 x에 대해 x보다 크면서 비트가 1~2개 다른 가장 작은 수를 찾아내는 문제입니다. 이를 해결하기 위해서는 먼저 주어진 숫자가 짝수인지 홀수인지에 따라 접근 방법을 다르게 설정할 수 있습니다. 짝수인 경우, 이진수에서 가장 오른쪽 비트가 0으로 끝나기 때문에 1을 더하면 비트가 1개만 다른 가장 작은 수가 됩니다. 예를 들어, 2(000...0010)의 경우 3(000...0011)이 되며, 이는 비트가 1개만 다르기 때문에 답이 됩니다.

반면 홀수인 경우는 더 복잡한 처리가 필요합니다. 홀수는 이진수에서 가장 오른쪽 비트가 1로 끝나므로, 오른쪽에서 첫 번째로 나오는 01 패턴을 찾아 이를 10으로 바꾸면 비트가 2개 이하로 다른 가장 작은 수를 만들 수 있습니다. 이를 위해 비트마스크를 사용하여 오른쪽부터 차례로 0을 찾고, 그 자리에 1을 설정하는 방식으로 01을 10으로 변환합니다. 예를 들어, 7(000...0111)에서는 11(000...1011)로 변환하여 비트 차이가 2개 이하인 수를 찾을 수 있습니다.

## 3. Answer

```java
class Solution {
  public long[] solution(long[] numbers) {
    long[] answer = new long[numbers.length];
    
    for (int i = 0; i < numbers.length; i++) {
      long number = numbers[i];
      
      // 짝수인 경우: 가장 오른쪽 비트가 항상 0이므로 1을 더하면 비트가 1개만 달라진다.
      // 예: 2(000...0010)의 경우, 3(000...0011)이 되며 비트가 1개만 다름.
      if (number % 2 == 0) {
        answer[i] = number + 1;
      } else {
        // 홀수인 경우: 가장 오른쪽에서 첫 번째로 나오는 01 패턴을 10으로 바꿔야 한다.
        // 이를 위해 비트마스크를 사용하여 가장 오른쪽의 0을 찾고, 그 자리에 1을 설정한다.
        // 예: 7(000...0111)에서 11(000...1011)이 됨.
        
        long bitMask = 1;  // 1을 초기값으로 설정하여 오른쪽부터 검사
        
        // number와 bitMask의 AND 연산이 0이 될 때까지 왼쪽으로 비트를 이동
        // 0을 만날 때까지 비트마스크를 왼쪽으로 이동하여 가장 오른쪽의 0을 찾음
        while ((number & bitMask) != 0) {
          bitMask <<= 1;
        }
        
        // 찾은 위치에서 01 패턴을 10으로 바꾸기 위해 bitMask를 더하고
        // bitMask의 절반 값을 뺌으로써 01을 10으로 변환
        answer[i] = number + bitMask - (bitMask >> 1);
      }
    }
    
    return answer;
  }
}
```

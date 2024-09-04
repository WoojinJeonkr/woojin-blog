---
external : false
title : "The next bigger number"
tag : [Programmers, Java]
date : 2024-09-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12911)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 자연수 n에 대해 다음 조건을 만족하는 가장 작은 수를 찾아야 합니다. n보다 크고, 2진수로 변환했을 때 1의 갯수가 동일한 숫자입니다.

이를 해결하기 위해 먼저 주어진 숫자 n의 2진수에서 1의 갯수를 계산합니다. 그런 다음, n보다 큰 수를 하나씩 검사하며, 그 수의 2진수에서 1의 갯수가 처음 계산한 값과 동일한지 확인합니다. 이러한 조건을 만족하는 첫 번째 숫자가 바로 우리가 찾는 다음 큰 숫자입니다.

이 방법은 기본적으로 n보다 큰 수를 하나씩 증가시키며 조건을 만족할 때까지 반복합니다. 이 과정에서 특정 숫자의 2진수에서 1의 갯수를 빠르게 계산하기 위해 Integer.bitCount와 같은 내장 함수를 사용할 수 있습니다. 이 함수를 통해 각 숫자의 2진수에서 1이 몇 개인지 쉽게 알 수 있으며, 이를 이용해 조건을 만족하는 숫자를 정확하게 찾아낼 수 있습니다.

이 과정은 자연수 n이 주어졌을 때 매우 직관적이며, 조건을 만족하는 가장 작은 수를 찾기 위해 모든 가능한 경우를 순차적으로 검사하는 방식으로 이루어집니다. 최종적으로, 조건을 만족하는 첫 번째 숫자를 반환함으로써 문제를 해결할 수 있습니다.

## 3. Answer

```java
class Solution {
  public int solution(int n) {
    int countOnes = Integer.bitCount(n);  // n의 2진수에서 1의 갯수를 셈
    int nextNumber = n + 1;  // n보다 큰 수부터 시작
    
    while (Integer.bitCount(nextNumber) != countOnes) {  // 1의 갯수가 같을 때까지 반복
      nextNumber++;
    }
    
    return nextNumber;  // 조건을 만족하는 첫 번째 숫자를 반환
  }
}
```

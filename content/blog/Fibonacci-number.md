---
external : false
title : "Fibonacci number"
tag : [Programmers, Java]
date : 2024-08-31
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12945)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 피보나치 수열의 n번째 값을 계산하고 그 값을 1234567로 나눈 나머지를 반환하는 문제입니다. 피보나치 수열의 특성상, n이 커질수록 계산해야 할 값이 급격히 증가하기 때문에 효율적인 방법으로 접근해야 합니다. 이를 위해 동적 프로그래밍 기법을 활용합니다.

먼저, n번째 값까지의 피보나치 수열을 저장할 배열을 생성하고, 주어진 초기 조건에 따라 0번째와 1번째 값을 각각 0과 1로 설정합니다.

그 다음, 2번째 인덱스부터 n번째 인덱스까지의 값을 반복문을 통해 계산합니다. 이때, 현재 값을 이전 두 값의 합으로 구하고, 결과를 1234567로 나눈 나머지를 저장합니다.

이렇게 계산된 최종 값이 n번째 피보나치 수이며, 이 값을 반환합니다.

## 3. Answer

```java
class Solution {
  public int solution(int n) {
    // 피보나치 수열을 저장할 배열을 선언합니다.
    int[] fib = new int[n + 1];

    // 초기값을 설정합니다.
    fib[0] = 0;
    fib[1] = 1;

    // 2번째부터 n번째 피보나치 수를 계산합니다.
    for (int i = 2; i < n + 1; i++) {
      fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
    }

    // n번째 피보나치 수를 반환합니다.
    return fib[n];
  }
}
```

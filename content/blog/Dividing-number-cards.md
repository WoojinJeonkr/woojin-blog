---
external : false
title : "Dividing number cards"
tag : [Programmers, Java]
date : 2024-10-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/135807)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해서는 두 배열의 최대공약수를 구하는 것과 그 공약수가 다른 배열의 원소들을 나누지 않도록 하는 방법을 생각해야 합니다. 먼저 각 배열에 대해 최대공약수를 계산하는데, 이 과정은 두 수의 최대공약수를 반복적으로 계산하여 배열 전체의 최대공약수를 찾는 방식으로 진행됩니다. 그런 다음, 구해진 최대공약수가 상대방 배열의 원소 중 어느 것도 나누지 않는지 확인해야 합니다. 이는 각각의 GCD가 다른 배열에 속한 모든 원소들을 나누지 않는다는 조건을 충족시키기 위함입니다.

문제를 해결하는 두 가지 경우를 모두 고려해야 합니다. 즉, 철수가 가진 배열의 최대공약수가 영희가 가진 배열의 원소들을 나누지 않고, 영희가 가진 배열의 최대공약수가 철수가 가진 배열의 원소들을 나누지 않는지 확인한 후, 조건을 만족하는 가장 큰 값을 선택합니다. 만약 어느 경우에도 조건을 만족하지 않는다면, 0을 반환하는 방식으로 구현할 수 있습니다.

## 3. Answer

```java
class Solution {
  // 최대공약수를 구하는 함수
  private int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
  }

  // 배열의 전체 최대공약수를 구하는 함수
  private int findGCD(int[] array) {
    int result = array[0];
    for (int num : array) {
      result = gcd(result, num);
      if (result == 1) break; // GCD가 1이면 더 이상 줄어들 수 없음
    }
    return result;
  }

  // 특정 GCD가 다른 배열의 모든 요소로 나눠지지 않는지 확인하는 함수
  private boolean dividesNone(int[] array, int gcd) {
    for (int num : array) {
      if (num % gcd == 0) {
        return false;
      }
    }
    return true;
  }

  public int solution(int[] arrayA, int[] arrayB) {
    // 배열 A와 B 각각의 GCD 구하기
    int gcdA = findGCD(arrayA);
    int gcdB = findGCD(arrayB);

    // 각 GCD가 상대 배열의 원소를 나누지 않는지 확인
    int resultA = dividesNone(arrayB, gcdA) ? gcdA : 0;
    int resultB = dividesNone(arrayA, gcdB) ? gcdB : 0;

    // 두 결과 중 더 큰 값을 반환
    return Math.max(resultA, resultB);
  }
}
```

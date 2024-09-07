---
external : false
title : "Least common multiple of N numbers"
tag : [Programmers, Java]
date : 2024-09-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12953)에서 확인하실 수 있습니다.

## 2. Problem solving process

두 수의 최소공배수는 두 수의 배수 중에서 가장 작은 공통 배수를 의미하며, 이를 구할 때 최대공약수를 활용할 수 있습니다. 두 수 A와 B의 최소공배수는 A와 B의 곱을 그들의 최대공약수로 나눈 값입니다. 이 개념을 확장하여 N개의 수에 대해서도 최소공배수를 구할 수 있습니다.

먼저 두 수의 최소공배수를 구한 후, 그 값을 다음 수와 차례대로 비교하며 최소공배수를 갱신해 나가는 방식으로 N개의 수에 대한 최소공배수를 구할 수 있습니다. 이를 위해 각 숫자 간의 최대공약수를 구하는 함수와 최소공배수를 구하는 함수를 정의한 후, 배열의 첫 번째 수부터 차례대로 계산하여 최종적으로 N개의 최소공배수를 구하면 됩니다.

## 3. Answer

```java
class Solution {
  // 최대공약수를 구하는 함수
  public int gcd(int a, int b) {
    while (b != 0) {
      int temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // 최소공배수를 구하는 함수
  public int lcm(int a, int b) {
    return a * b / gcd(a, b);
  }

  // 주어진 배열의 모든 수들의 최소공배수를 구하는 함수
  public int solution(int[] arr) {
    int answer = arr[0];
    for (int i = 1; i < arr.length; i++) {
      answer = lcm(answer, arr[i]);
    }
    return answer;
  }
}
```

---
external : false
title : "Count Primes in k base"
tag : [Programmers, Java]
date : 2024-09-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/92335)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 주어진 숫자 n을 k진수로 변환한 후, 변환된 숫자 안에서 특정 조건에 맞는 소수를 찾는 문제입니다. 먼저, n을 k진수로 변환한 후 변환된 문자열에서 숫자들을 추출하는 과정이 필요합니다. 이를 위해 0을 기준으로 변환된 문자열을 분리합니다. 이는 소수의 양 끝에 0이 있거나 한쪽 끝에만 0이 있을 때 해당 소수를 쉽게 추출하기 위한 과정입니다.

각각의 분리된 숫자들에 대해서는 소수인지 여부를 확인해야 합니다. 소수는 1과 자기 자신 외에 다른 약수를 가지지 않는 숫자를 의미하며, 문제에서는 각 자릿수에 0이 포함된 숫자는 소수로 취급하지 않는다는 점을 유의해야 합니다.

따라서 각 분리된 숫자를 10진수로 변환한 후, 소수인지 확인하는 함수를 통해 검증합니다. 이 과정에서 소수라면 카운트를 증가시키고, 이를 반복하여 최종적으로 소수의 개수를 반환하는 방식으로 문제를 해결할 수 있습니다.

## 3. Answer

```java
class Solution {
  // 소수인지 확인하는 함수
  public boolean isPrime(long num) {
    if (num < 2) return false;  // 2보다 작은 수는 소수가 아님
    for (long i = 2; i * i <= num; i++) {
      if (num % i == 0) return false;  // 약수가 존재하면 소수가 아님
    }
    return true;
  }

  public int solution(int n, int k) {
    // n을 k진수로 변환
    String converted = Integer.toString(n, k);
    
    // 0을 기준으로 숫자를 분리
    String[] parts = converted.split("0+");

    int count = 0;

    // 각 숫자가 소수인지 확인
    for (String part : parts) {
      if (!part.isEmpty()) {
        long number = Long.parseLong(part);
        if (isPrime(number)) {
          count++;  // 소수이면 카운트 증가
        }
      }
    }

    return count;
  }
}
```

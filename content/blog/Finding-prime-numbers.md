---
external : false
title : "Finding prime numbers"
tag : [Programmers, Java]
date : 2024-09-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42839)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 주어진 문자열로 만들 수 있는 모든 숫자 조합 중에서 소수를 찾아내는 문제입니다. 이를 해결하기 위해 먼저 문자열의 각 숫자를 사용하여 가능한 모든 순열을 생성하는 것이 중요합니다. 순열은 특정 숫자 조합을 여러 가지 방식으로 섞어 새로운 숫자를 만들어낼 수 있게 합니다. 이를 위해 재귀적인 방법으로 주어진 문자열의 각 문자를 선택하고 나머지 문자를 계속 결합하여 가능한 모든 숫자 조합을 구합니다.

순열을 통해 만들어진 숫자 조합 중에서는 중복되는 숫자가 있을 수 있으므로, 중복을 제거하기 위해 Set 자료구조를 활용합니다. Set은 동일한 숫자를 여러 번 저장하지 않으므로 중복된 숫자를 자연스럽게 필터링할 수 있습니다.

그다음에는 각 숫자가 소수인지 확인하는 과정이 필요합니다. 소수는 1과 자기 자신을 제외한 다른 약수를 가지지 않는 숫자이므로, 소수 여부를 판별하는 함수는 숫자가 2 이상이고 제곱근까지 나눠지는 수가 없는지를 검사합니다. 최종적으로 소수인 숫자들의 개수를 세어 반환하는 방식으로 문제를 해결할 수 있습니다.

## 3. Answer

```java
import java.util.HashSet;
import java.util.Set;

class Solution {
  // 주어진 숫자가 소수인지 판별하는 함수
  public boolean isPrime(int num) {
    if (num <= 1) return false; // 1 이하의 숫자는 소수가 아님
    for (int i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false; // 약수가 있으면 소수가 아님
    }
    return true; // 소수일 경우 true 반환
  }

  // 주어진 숫자 조각으로 만들 수 있는 소수의 개수를 반환하는 함수
  public int solution(String numbers) {
    Set<Integer> uniqueNumbers = new HashSet<>(); // 중복 숫자를 방지하기 위해 Set 사용
    permute("", numbers, uniqueNumbers); // 가능한 숫자 조합을 모두 생성

    int count = 0;
    // 생성된 숫자 중 소수인 숫자의 개수를 셈
    for (int num : uniqueNumbers) {
      if (isPrime(num)) {
        count++;
      }
    }
    return count; // 소수의 개수를 반환
  }

  // 가능한 모든 순열을 생성하는 함수
  public void permute(String prefix, String str, Set<Integer> result) {
    int n = str.length();
    if (!prefix.isEmpty()) {
      result.add(Integer.valueOf(prefix)); // 숫자로 변환하여 Set에 추가
    }
    for (int i = 0; i < n; i++) {
      // 재귀적으로 순열 생성
      permute(prefix + str.charAt(i), str.substring(0, i) + str.substring(i + 1, n), result);
    }
  }
}
```

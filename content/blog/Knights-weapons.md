---
external : false
title : "Knights weapons"
tag : [Programmers, Java]
date : 2024-10-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/136798)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제에서는 각 기사 번호의 약수 개수를 계산해 그 개수를 공격력으로 사용하고, 특정 조건에 따라 무기 공격력을 조정하여 필요한 철의 총 무게를 구하는 방법을 설계해야 합니다.

먼저, 각 기사 번호의 약수 개수를 파악하는 것이 핵심입니다. 약수 개수는 일반적으로 O(√n) 복잡도로 구할 수 있는데, 이는 특정 수의 제곱근까지만 반복해 약수를 찾는 방식입니다. 예를 들어, 숫자 num에 대해 i가 num의 약수라면 num / i도 약수가 되기 때문에, 제곱근까지만 반복하여 효율적으로 약수를 찾을 수 있습니다.

이제 각 기사 번호에 대해 약수 개수를 계산한 후, 해당 개수가 공격력 제한 수치인 limit을 초과하는지 확인합니다. 초과하는 경우에는 지정된 공격력 power를 적용하고, 그렇지 않은 경우는 약수 개수 그대로 공격력으로 사용합니다. 이를 통해 각 기사의 공격력을 계산하여 모두 합산한 결과가 필요한 철의 총 무게가 됩니다.

## 3. Answer

```java
class Solution {
  public int solution(int number, int limit, int power) {
    int answer = 0;
    
    // 1부터 number까지 각 기사의 번호에 대해 반복
    for (int i = 1; i <= number; i++) {
      int divisorCount = getDivisorCount(i); // 현재 번호의 약수 개수 계산
      
      // 약수 개수가 제한 수치를 초과하는 경우
      if (divisorCount > limit) {
        answer += power; // 제한 수치를 초과하면 지정된 공격력(power) 사용
      } else {
        answer += divisorCount; // 그렇지 않으면 약수 개수를 공격력으로 사용
      }
    }
    
    return answer;
  }

  // 주어진 숫자의 약수 개수를 계산하는 메서드
  private int getDivisorCount(int num) {
    int count = 0;
    
    // 숫자의 제곱근까지만 반복하여 약수를 찾음
    for (int i = 1; i * i <= num; i++) {
      if (num % i == 0) { // i가 num의 약수인 경우
        count++; // 약수 하나 추가
        if (i != num / i) { // i와 num / i가 다른 경우 두 번째 약수 추가
          count++;
        }
      }
    }
    
    return count;
  }
}
```

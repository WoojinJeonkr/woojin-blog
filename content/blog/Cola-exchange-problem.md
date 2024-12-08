---
external : false
title : "Cola exchange problem"
tag : [Programmers, Java]
date : 2024-12-08
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/132267)에서 확인하실 수 있습니다.

## 2. Problem solving process

콜라 문제는 빈 병의 교환 과정을 반복적으로 시뮬레이션하여 총 받을 수 있는 콜라 병 수를 계산하는 문제입니다. 접근 방법은 먼저 교환 규칙을 분석하여 빈 병의 개수와 교환 비율을 기반으로 새로운 콜라 병을 받을 수 있는 조건을 도출하는 것입니다.

문제를 해결하기 위해 초기 빈 병의 개수를 기준으로 교환 가능한 콜라 병의 개수를 계산합니다. 이때, 빈 병의 개수는 나눗셈 연산을 사용하여 교환 가능한 병 수와 나머지 빈 병을 구합니다. 교환으로 얻은 콜라 병의 개수를 누적하면서 현재 빈 병의 개수를 갱신합니다.

이러한 과정은 교환 최소 조건인 a보다 빈 병의 개수가 작아질 때까지 반복됩니다. 최종적으로 교환을 통해 획득한 콜라 병 수를 모두 더하여 문제의 해답을 도출합니다.

## 3. Answer

```java
class Solution {
  public int solution(int a, int b, int n) {
    int answer = 0; // 총 받은 콜라 병 수를 저장할 변수

    while (n >= a) { // 빈 병이 교환 가능한 개수 이상일 동안 반복
      int exchange = (n / a) * b; // 교환으로 얻은 콜라 병 수 계산
      n = (n % a) + exchange; // 남은 빈 병 수와 새로 얻은 병 수 갱신
      answer += exchange; // 받은 콜라 병 수를 누적
    }

    return answer; // 최종적으로 받은 콜라 병 수 반환
  }
}
```

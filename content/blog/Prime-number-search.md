---
external : false
title : "Prime number search"
tag : [Programmers, Python]
date : 2024-12-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12921)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 에라토스테네스의 체 알고리즘을 활용하여 해결했습니다. 에라토스테네스의 체는 소수를 빠르게 구하기 위한 효율적인 방법으로, 2부터 시작하여 특정 수의 배수를 제거하는 방식으로 작동합니다.

먼저, 입력된 숫자 n까지의 모든 숫자를 소수로 가정하고, 0과 1은 소수가 아니므로 `False`로 설정합니다.

이후, 2부터 n의 제곱근까지의 숫자를 기준으로 해당 숫자의 배수를 제거합니다. 이 과정에서 남아 있는 `True` 값의 개수가 소수의 총 개수가 됩니다.

최종적으로, 리스트에서 `True` 값의 합을 반환하여 1부터 \( n \) 사이의 소수 개수를 계산합니다.

## 3. Answer

```java
def solution(n):
  # 에라토스테네스의 체를 이용하여 1부터 n 사이의 소수를 찾는다.
  # 1은 소수가 아니므로 0에서 n까지의 리스트를 생성한 후 0과 1의 값을 False로 초기화한다.
  is_prime = [True] * (n + 1)
  is_prime[0] = is_prime[1] = False

  # 2부터 루트 n까지의 숫자를 기준으로 배수들을 제거한다.
  for i in range(2, int(n**0.5) + 1):
    if is_prime[i]:
      # i의 배수는 소수가 아니므로 False로 표시한다.
      for j in range(i * i, n + 1, i):
        is_prime[j] = False

  # True로 남아 있는 값들은 소수이므로 True 값의 개수를 세어 반환한다.
  return sum(is_prime)
```

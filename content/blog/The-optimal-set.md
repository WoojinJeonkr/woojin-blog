---
external : false
title : "The optimal set"
tag : [Programmers, Python]
date : 2025-02-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12938)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간(문제 확인 ~ 첫 쿼리 작성 시점): 5분
2. 해결 시간(첫 쿼리 시도 ~ 문제 정답 확인): 10분
3. 코드 시도 횟수: 2회

## 3. Problem solving process

이 문제를 해결하기 위한 핵심은 원소들의 합이 S가 되면서 곱이 최대가 되는 집합을 찾는 것입니다. 수학적으로 볼 때, 같은 합을 가진 수들의 곱에서는 각 숫자들의 차이가 최소일 때 곱이 최대가 됩니다.

따라서 가장 먼저 주어진 합 s를 원소의 개수 n으로 나누어 기본값을 구합니다. 이 기본값을 모든 원소에 할당한 후, 남은 나머지를 뒤에서부터 1씩 더해주면 됩니다. 이렇게 하면 자연스럽게 오름차순으로 정렬된 결과를 얻을 수 있습니다.

단, 문제 해결 전에 불가능한 경우를 먼저 체크해야 합니다. n개의 자연수로 합 s를 만들 수 없는 경우, 즉 s가 n보다 작거나 s를 n으로 나눈 몫이 0인 경우에는 [-1]을 반환해야 합니다.

## 4. Answer

```python
def solution(n, s):
  # 1. 자연수 n개로 합 s를 만들 수 없는 경우 체크
  if s < n or s // n == 0:
    return [-1]
  
  # 2. 기본값 계산 (합을 n으로 나눈 몫)
  base = s // n
  
  # 3. 나머지 계산 (합을 n으로 나눈 나머지)
  remainder = s % n
  
  # 4. 모든 원소를 기본값으로 초기화
  result = [base] * n
  
  # 5. 나머지를 1씩 뒤에서부터 더해줌
  for i in range(n - remainder, n):
    result[i] += 1
  
  return result
```

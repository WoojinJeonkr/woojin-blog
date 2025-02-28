---
external : false
title : "Ways to  line up"
tag : [Programmers, Python]
date : 2025-02-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12936)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 순열을 사용합니다. 순열은 n개의 요소로 이루어진 집합에서 요소들을 나열하는 방법의 수를 의미합니다. 이 경우, n명의 사람을 일렬로 나열하는 방법의 수는 n!입니다.

문제 해결 방법은 k번째 순열을 찾는 것입니다. 이를 위해 k를 1 감소시켜 0부터 시작하는 인덱스를 사용합니다. 이는 컴퓨터에서 배열이나 리스트의 인덱스가 0부터 시작하는 방식과 일치하게 하여, 순열의 위치를 정확히 계산할 수 있도록 합니다. n!을 계산하여 k번째 순열을 찾기 위한 반복문을 사용합니다. 각 단계에서 현재 순열에서 선택할 숫자의 인덱스를 결정하고, k 값을 업데이트하여 다음 단계에서 사용할 수 있도록 합니다. 이 과정을 반복하여 k번째 순열을 구합니다.

이 과정에서 선택한 숫자는 결과에 추가되고, 숫자 리스트에서 제거됩니다. 이를 통해 k번째 순열을 효율적으로 찾을 수 있습니다.

## 3. Answer

```python
import math

def solution(n, k):
  # 1부터 n까지의 숫자를 리스트로 저장
  nums = list(range(1, n + 1))
  
  # k를 1 감소시켜 0-indexed로 변환
  k -= 1
  
  # 결과를 저장할 리스트
  answer = []
  
  # n!을 계산하여 k번째 순열을 찾기 위한 반복문
  for i in range(n, 0, -1):
    # 현재 순열에서 선택할 숫자의 인덱스를 계산
    idx = k // math.factorial(i - 1)
    
    # k를 업데이트하여 다음 순열에서 선택할 숫자의 인덱스를 계산
    k %= math.factorial(i - 1)
    
    # 선택한 숫자를 결과에 추가하고, 숫자 리스트에서 제거
    answer.append(nums[idx])
    nums.pop(idx)
  
  return answer
```

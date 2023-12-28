---
external: false
title: "Baekjoon 13505"
date: 2023-07-08
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/13505)

## 2. 접근 방법

- 비트 연산을 활용하여 XOR 결과를 구합니다.
- 주어진 수들을 이진수로 표현하고, 가장 왼쪽 비트부터 차례대로 XOR 결과를 구해나갑니다.
- 이를 위해 mask 변수를 사용하여 현재 비트까지의 비트 마스크를 만들고, nums 리스트의 모든 수에 이 마스크를 적용하여 XOR 연산을 수행한 결과를 xor_set에 저장한 뒤 candidate 변수를 업데이트하면서 candidate XOR prefix 값이 xor_set에 있는지 확인하여 최대 XOR 값을 찾습니다.

## 3. 풀이 1 (Python, memory: 45332KB, time: 476ms)

```python
# 이 함수는 주어진 정수 리스트 nums에서 두 수의 XOR 결과가 최대가 되는 값을 찾는 함수입니다.
def find_max_xor(nums):
    max_xor = 0  # 최대 XOR 결과를 저장하는 변수를 초기화합니다.
    mask = 0  # XOR 연산에 사용할 비트 마스크를 초기화합니다.
    
    # 31부터 0까지 역순으로 반복합니다.
    for i in range(31, -1, -1):
        mask |= (1 << i)  # 현재 비트 위치에 대한 마스크를 설정합니다.
        xor_set = set()  # 현재 비트 위치에서 XOR 결과를 저장하는 집합을 초기화합니다.
        
        # 주어진 정수 리스트에서 각 숫자를 현재 비트 마스크와 AND 연산하여 XOR 결과를 집합에 추가합니다.
        for num in nums:
            xor_set.add(num & mask)
        
        candidate = max_xor | (1 << i)  # 현재 비트 위치에서 1을 설정한 후 XOR 결과의 후보값을 계산합니다.
        
        # XOR 결과 집합을 순회하면서 후보값과 XOR 연산을 수행했을 때 결과가 집합에 있는지 확인합니다.
        # XOR 결과가 집합에 있으면 최대 XOR 값을 업데이트하고 반복문을 종료합니다.
        for prefix in xor_set:
            if candidate ^ prefix in xor_set:
                max_xor = candidate
                break
    
    return max_xor

n = int(input())  # 정수 개수를 입력받습니다.
nums = list(map(int, input().split()))  # 정수 리스트를 입력받습니다.

print(find_max_xor(nums))  # 최대 XOR 값을 출력합니다.
```

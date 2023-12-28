---
external: false
title: "Baekjoon 2503"
date: 2023-04-27
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2503)

## 2. Solution

## 1. Python (memory: 31256KB, time: 52ms)

```python
from itertools import permutations

# 숫자 1-9를 사용하여 가능한 모든 3자리 숫자 생성
digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
numbers = list(permutations(digits, 3))

# 테스트 케이스 수
num_tests = int(input())

for _ in range(num_tests):
    # 목표 번호와 해당 스트라이크 및 공
    target_num, strikes, balls = map(int, input().split())
    target_digits = list(str(target_num))
    remove_count = 0

    # 가능한 숫자 목록에서 각 숫자를 확인
    for i in range(len(numbers)):
        # 숫자가 제거된 경우 인덱스 조정
        i -= remove_count

        # 현재 숫자에 대한 스트라이크 및 볼 계산
        current_number = numbers[i]
        current_strikes, current_balls = 0, 0
        for j in range(3):
            if current_number[j] == target_digits[j]:
                current_strikes += 1
            elif target_digits[j] in current_number:
                current_balls += 1

        # 주어진 스트라이크 및 볼과 일치하지 않는 경우 숫자를 제거
        if (current_strikes != strikes) or (current_balls != balls):
            numbers.remove(current_number)
            remove_count += 1

print(len(numbers))
```

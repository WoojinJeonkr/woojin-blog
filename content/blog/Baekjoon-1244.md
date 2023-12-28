---
external: false
title: "Baekjoon 1244"
date: 2023-04-25
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1244)

## 2. Solution(Python, memory: 31256KB, time: 48ms)

```python
num_bits = int(input())
bits = list(map(int, input().split()))
num_operations = int(input())

for _ in range(num_operations):
    gender, switch_idx = map(int, input().split())

    if gender == 1:
        for i in range(1, (len(bits) // switch_idx) + 1):
            target_idx = (switch_idx * i) - 1
            bits[target_idx] = 1 - bits[target_idx]

    if gender == 2:
        bits[switch_idx - 1] = 1 - bits[switch_idx - 1]
        left_idx = switch_idx - 2
        right_idx = switch_idx
        while left_idx >= 0 and right_idx < num_bits and bits[left_idx] == bits[right_idx]:
            bits[left_idx] = 1 - bits[left_idx]
            bits[right_idx] = 1 - bits[right_idx]
            left_idx -= 1
            right_idx += 1
            if left_idx < 0 or right_idx >= num_bits:
                break

count = 0
output_str = ''
for i in range(num_bits):
    output_str += str(bits[i]) + ' '
    count += 1
    if count == 20:
        print(output_str)
        output_str = ''
        count = 0
if len(output_str) != 0:
    print(output_str)
```

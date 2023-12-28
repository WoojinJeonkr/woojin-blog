---
external: false
title: "Baekjoon 2846"
date: 2023-05-06
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2846)

## 2. Solution

## 1. Python (memory: 32404KB, time: 220ms)

```python
# 입력 값의 길이
length = int(input())

# 입력 값을 공백을 기준으로 분리하여 정수 리스트로 저장
numbers = list(map(int, input().split()))

# 현재 합계를 나타내는 변수 초기화
current_sum = 0

# 결과를 저장할 리스트 생성
result = []

# 인덱스 범위(~ length-1) 내에서 반복합니다.
for i in range(length - 1):
    # 현재 숫자가 다음 숫자보다 작으면
    if numbers[i] < numbers[i + 1]:
        # 현재 합계에 다음 숫자와 현재 숫자의 차이 더하기
        current_sum += numbers[i + 1] - numbers[i]
    else:
        # 현재 숫자가 다음 숫자보다 크거나 같으면
        # 현재 합계를 결과 리스트에 추가 후 현재 합계 초기화
        result.append(current_sum)
        current_sum = 0

# 마지막 합계를 결과 리스트에 추가
result.append(current_sum)

# 결과 리스트에서 최댓값 출력
print(max(result))
```

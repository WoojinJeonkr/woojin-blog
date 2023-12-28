---
external: false
title: "Baekjoon 18406"
date: 2023-11-30
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/18406)

## 2. 문제 해석

주어진 문제는 주어진 수의 자릿수를 반으로 나누어 왼쪽 부분과 오른쪽 부분의 각 자릿수 합이 같은지 확인하는 문제입니다. 주어진 수를 문자열로 변환하여 각 자릿수를 더해주면서 반으로 나누어 왼쪽 부분과 오른쪽 부분의 합을 계산하고, 그 결과를 비교하여 "LUCKY" 또는 "READY"를 출력하면 됩니다.

## 3. 정답 코드 (python3, memory: 31120KB, time: 52ms)

```python
def lucky_straight(score):
    # 주어진 수를 문자열로 변환
    score_str = str(score)

    # 문자열의 중간 인덱스를 계산
    mid_index = len(score_str) // 2

    # 왼쪽 부분의 문자열
    left_part = score_str[:mid_index]

    # 오른쪽 부분의 문자열
    right_part = score_str[mid_index:]

    # 왼쪽 부분의 각 자릿수 합 계산
    left_sum = sum(map(int, left_part))

    # 오른쪽 부분의 각 자릿수 합 계산
    right_sum = sum(map(int, right_part))

    # 럭키 스트레이트 판별
    if left_sum == right_sum:
        return "LUCKY"
    else:
        return "READY"

# 입력 받기
score = int(input())

# 결과 출력
result = lucky_straight(score)
print(result)
```

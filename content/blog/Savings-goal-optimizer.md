---
external : false
title : "Savings goal optimizer"
tag : [Python]
date : 2026-05-26
---

## 1. Problem

민수는 절약 습관을 만들기 위해
매일 소비 금액을 기록하고 있다.

민수는 연속된 날짜 동안의 소비 금액 합이
예산 B 이하인 가장 긴 기간을 찾고 싶어 한다.

N일 동안의 소비 금액이 주어질 때,
연속된 구간의 총합이 B 이하가 되는
가장 긴 기간의 길이를 구하는 프로그램을 작성하시오.

## 2. Input

- 첫째 줄에 날짜 수 N과 예산 B가 주어진다.
- 둘째 줄에 N개의 소비 금액이 공백으로 구분되어 주어진다.

## 3. Limit

- 1 ≤ N ≤ 200000
- 1 ≤ B ≤ 10^9
- 1 ≤ 소비 금액 ≤ 100000
- 모든 입력은 정수

## 4. Output

연속된 소비 금액 합이 예산 B 이하인
가장 긴 기간의 길이를 출력한다.

## 5. Input Example

```text
10 15
2 1 3 5 2 1 1 7 2 3
```

## 6. Output Example

```text
6
```

## 7. Example Explanation

소비 금액 배열은 다음과 같다.

```text
2 1 3 5 2 1 1 7 2 3
```

연속된 구간 중 합이 15 이하인 가장 긴 구간은:

```text
2 1 3 5 2 1
```

합계:

```text
2 + 1 + 3 + 5 + 2 + 1 = 14
```

길이는 6이다.

길이가 7 이상인 모든 연속 구간은
합이 15를 초과한다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

# 날짜 수, 예산 입력
n, b = map(int, input().split())

# 소비 금액 배열
costs = list(map(int, input().split()))

left = 0
current_sum = 0
max_length = 0

# 투 포인터 탐색
for right in range(n):
    current_sum += costs[right]

    # 예산 초과 시 왼쪽 포인터 이동
    while current_sum > b:
        current_sum -= costs[left]
        left += 1

    # 최대 길이 갱신
    max_length = max(max_length, right - left + 1)

print(max_length)
```

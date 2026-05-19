---
external : false
title : "Quantum vault permutation key"
tag : [Python]
date : 2026-05-19
---

## 1. Problem

한 연구소에서는 양자 금고의 보안 키를 관리하기 위해
1부터 N까지의 숫자를 이용한 순열 기반 인증 시스템을 사용한다.

보안 시스템은 가능한 모든 순열을 사전 순으로 정렬한다.

관리자는 특정 순열이 전체 순열 중 몇 번째 순서인지
빠르게 계산해야 한다.

1부터 N까지의 숫자로 이루어진 순열이 주어질 때,
해당 순열의 사전 순 순서를 구하시오.

순서는 1번부터 시작한다.

## 3. Input

- 첫째 줄에 정수 N이 주어진다.
- 둘째 줄에 길이 N인 순열이 공백으로 구분되어 주어진다.

## 5. Limit

- 1 ≤ N ≤ 20
- 주어지는 수열은 1부터 N까지의 순열이다.

## 6. Output

- 주어진 순열의 사전 순 순서를 출력한다.

## 7. Input Example

```text
4
2 1 4 3
```

## 8. Output Example

```text
8
```

## 9. Example Explanation

길이가 4인 순열을 사전 순으로 나열하면 다음과 같다.

```text
1 : 1 2 3 4
2 : 1 2 4 3
3 : 1 3 2 4
4 : 1 3 4 2
5 : 1 4 2 3
6 : 1 4 3 2
7 : 2 1 3 4
8 : 2 1 4 3
```

따라서 주어진 순열의 순서는 8이다.

## 10. Answer

```python
import sys
from math import factorial

input = sys.stdin.readline

N = int(input())
perm = list(map(int, input().split()))

numbers = list(range(1, N + 1))

answer = 1

for i in range(N):
    current = perm[i]

    # 현재 숫자보다 작은 숫자가 몇 개 남아있는지 확인
    idx = numbers.index(current)

    # 앞자리에 더 작은 숫자가 오는 경우의 수 계산
    answer += idx * factorial(N - i - 1)

    # 사용한 숫자 제거
    numbers.pop(idx)

print(answer)
```

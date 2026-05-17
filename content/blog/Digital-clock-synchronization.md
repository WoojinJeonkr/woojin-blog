---
external : false
title : "Digital clock synchronization"
tag : [Python]
date : 2026-05-17
---

## 1. Problem

한 연구소에는 여러 개의 디지털 시계가 일렬로 배치되어 있다.

각 시계는 초 단위의 시간을 표시하며,
시계마다 시간이 조금씩 어긋나 있을 수 있다.

연구원은 모든 시계의 시간을 동일하게 맞추려고 한다.
한 번의 조작으로 특정 시계의 시간을 1초 증가시키거나 감소시킬 수 있다.

모든 시계 시간을 같게 만들기 위한 최소 조작 횟수를 구하시오.

## 3. Input

- 첫째 줄에 시계의 개수 N이 주어진다.
- 둘째 줄에 각 시계가 표시하는 시간이 공백으로 구분되어 주어진다.

## 5. Limit

- 1 ≤ N ≤ 200,000
- 0 ≤ 시간 ≤ 1,000,000,000

## 6. Output

- 모든 시계 시간을 동일하게 만들기 위한 최소 조작 횟수를 출력한다.

## 7. Input Example

```text
5
1 3 2 6 4
```

## 8. Output Example

```text
7
```

## 9. Example Explanation

```text
모든 시계를 3초로 맞춘다고 가정하면

1 → 3 : 2회
3 → 3 : 0회
2 → 3 : 1회
6 → 3 : 3회
4 → 3 : 1회

총 조작 횟수는 7회이다.
```

## 10. Answer

```py
import sys

input = sys.stdin.readline

N = int(input())
times = list(map(int, input().split()))

# 중앙값 기준으로 맞추는 것이 최소 이동 횟수
times.sort()

target = times[N // 2]

answer = 0

for t in times:
    answer += abs(t - target)

print(answer)
```

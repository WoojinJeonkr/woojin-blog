---
external : false
title : "Divine balance"
tag : [Python]
date : 2026-08-16
---

## 1. Problem

신전에는 일렬로 배치된 여러 개의 신상이 있으며, 각 신상에는 신의 힘을 나타내는 신격 수치가 기록되어 있다.

신상은 총 `N`개이며, `DivinePower`는 각 신상에 기록된 신격 수치를 순서대로 저장한 배열이다.

관리자는 특정 구간의 신격이 얼마나 균형을 이루고 있는지 확인하기 위해 연속된 신상 구간을 선택한다.

구간 `[l, r]`의 신격 차이는 해당 구간에서 가장 높은 신격 수치와 가장 낮은 신격 수치의 차이로 정의한다.

```text
max(DivinePower[l:r+1]) - min(DivinePower[l:r+1])
```

관리자는 신격 차이가 정확히 `K` 이하인 연속 구간 중 **가장 긴 구간의 길이**를 구하려고 한다.

신격 수치는 서로 같을 수도 있으며 음수가 될 수도 있다.

### 입력

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `DivinePower`가 공백으로 구분되어 주어진다.

### 출력

신격 차이가 `K` 이하인 연속 구간 중 가장 긴 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `0 ≤ K ≤ 10^9`
- `-10^9 ≤ DivinePower의 각 원소 ≤ 10^9`

## 2. Input Example

### Example 1

```text
8 3
5 7 6 8 10 9 7 6
```

### Example 2

```text
7 2
1 3 5 4 2 3 1
```

## 3. Output Example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
3
```

## 4. Explanation

### 4.1. Example 1

다음과 같이 신격 수치가 주어진다.

```text
5 7 6 8 10 9 7 6
```

`K`는 `3`이다.

다음 구간을 선택할 수 있다.

```text
5 7 6 8
```

이 구간의 최댓값은 `8`, 최솟값은 `5`이므로 신격 차이는 다음과 같다.

```text
8 - 5 = 3
```

따라서 조건을 만족한다.

길이가 `5`인 구간을 확인하면,

```text
5 7 6 8 10
```

최댓값과 최솟값의 차이가

```text
10 - 5 = 5
```

가 되어 `K`를 초과한다.

따라서 조건을 만족하는 가장 긴 구간의 길이는

```text
4
```

이다.

### 4.2. Example 2

신격 수치는 다음과 같다.

```text
1 3 5 4 2 3 1
```

`K`는 `2`이다.

다음 구간을 선택하면,

```text
3 5 4
```

최댓값은 `5`, 최솟값은 `3`이므로 신격 차이는

```text
5 - 3 = 2
```

이다.

따라서 길이가 `3`인 구간이 조건을 만족한다.

길이가 `4`인 연속 구간들은 모두 최댓값과 최솟값의 차이가 `2`를 초과하므로, 가장 긴 구간의 길이는

```text
3
```

이다.

## 5. Answer

```python
import sys
from collections import deque

input = sys.stdin.readline

N, K = map(int, input().split())
DivinePower = list(map(int, input().split()))

max_deque = deque()
min_deque = deque()

left = 0
answer = 0

for right, power in enumerate(DivinePower):
    while max_deque and DivinePower[max_deque[-1]] <= power:
        max_deque.pop()

    while min_deque and DivinePower[min_deque[-1]] >= power:
        min_deque.pop()

    max_deque.append(right)
    min_deque.append(right)

    while DivinePower[max_deque[0]] - DivinePower[min_deque[0]] > K:
        if max_deque[0] == left:
            max_deque.popleft()

        if min_deque[0] == left:
            min_deque.popleft()

        left += 1

    answer = max(answer, right - left + 1)

print(answer)
```

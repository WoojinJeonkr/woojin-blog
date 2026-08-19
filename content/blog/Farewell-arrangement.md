---
external : false
title : "Farewell arrangement"
tag : [Python]
date : 2026-08-19
---

## 1. Problem

한 학교에서는 졸업을 앞두고 친구들과의 이별을 준비하고 있다.

학생들은 일렬로 앉아 있으며, 각 학생에게는 마지막으로 전하고 싶은 **이별의 마음의 크기**가 정수로 주어진다.

`Feeling`은 학생들이 순서대로 가지고 있는 이별의 마음의 크기를 저장한 배열이다.

행사 진행자는 여러 개의 연속된 구간을 선택하여 해당 구간의 이별의 마음을 분석하려고 한다.

구간 `[l, r]`에 포함된 학생들의 이별의 마음 중 가장 큰 값과 가장 작은 값의 차이를 **이별의 온도 차이**라고 정의한다.

```text
max(Feeling[l:r+1]) - min(Feeling[l:r+1])
```

행사 진행자는 이별의 온도 차이가 `K` 이하인 구간만 하나의 그룹으로 묶을 수 있다고 한다.

따라서 다음 조건을 만족하는 연속 구간 중 가장 긴 구간의 길이를 구해야 한다.

```text
max(구간의 이별의 마음) - min(구간의 이별의 마음) ≤ K
```

학생의 수가 매우 많기 때문에 모든 구간의 최댓값과 최솟값을 직접 계산하면 시간이 오래 걸린다.

효율적인 **Segment Tree** 또는 **Monotonic Deque** 등의 자료구조를 활용하여 문제를 해결해야 한다.

### 입력

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `Feeling`이 공백으로 구분되어 주어진다.

### 출력

이별의 온도 차이가 `K` 이하인 연속 구간 중 가장 긴 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `0 ≤ K ≤ 10^9`
- `-10^9 ≤ Feeling의 각 원소 ≤ 10^9`

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

이별의 마음은 다음과 같다.

```text
5 7 6 8 10 9 7 6
```

`K = 3`이므로 같은 그룹에 포함된 학생들의 이별의 마음 중 최댓값과 최솟값의 차이가 `3` 이하여야 한다.

다음 구간을 살펴보자.

```text
5 7 6 8
```

이 구간에서

```text
최댓값 = 8
최솟값 = 5
```

이므로 이별의 온도 차이는

```text
8 - 5 = 3
```

이다.

따라서 조건을 만족한다.

반면 길이가 `5`인 다음 구간은

```text
5 7 6 8 10
```

최댓값과 최솟값의 차이가

```text
10 - 5 = 5
```

이므로 조건을 만족하지 않는다.

따라서 가장 긴 구간의 길이는

```text
4
```

이다.

### 4.2. Example 2

이별의 마음은 다음과 같다.

```text
1 3 5 4 2 3 1
```

`K = 2`이다.

다음 구간을 확인하면

```text
3 5 4
```

최댓값은 `5`, 최솟값은 `3`이므로

```text
5 - 3 = 2
```

이다.

따라서 이 구간은 조건을 만족하며 길이는 `3`이다.

길이가 `4`인 모든 연속 구간을 확인하면 최댓값과 최솟값의 차이가 `2`보다 큰 구간이 포함되므로 길이 `4`의 구간은 조건을 만족하지 않는다.

따라서 정답은

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
Feeling = list(map(int, input().split()))

maximum = deque()
minimum = deque()

left = 0
answer = 0

for right, value in enumerate(Feeling):
    while maximum and Feeling[maximum[-1]] <= value:
        maximum.pop()

    while minimum and Feeling[minimum[-1]] >= value:
        minimum.pop()

    maximum.append(right)
    minimum.append(right)

    while Feeling[maximum[0]] - Feeling[minimum[0]] > K:
        if maximum[0] == left:
            maximum.popleft()

        if minimum[0] == left:
            minimum.popleft()

        left += 1

    answer = max(answer, right - left + 1)

print(answer)
```

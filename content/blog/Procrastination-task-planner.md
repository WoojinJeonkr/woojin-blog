---
external : false
title : "Procrastination task planner"
tag : [Python]
date : 2026-06-18
---

## 1. Problem

한 직장인은 해야 할 일을 자꾸 미루는 습관이 있다.

해야 할 업무는 여러 개 존재하며, 각 업무는 마감일까지 끝내야 한다.

하지만 태만한 성격 때문에 하루에 하나의 업무만 수행할 수 있으며, 가능한 한 많은 업무를 마감 전에 끝내는 것이 목표이다.

각 업무에 대해

- 업무를 완료했을 때 얻는 만족도 `Pi`
- 마감일 `Di`

가 주어진다.

모든 업무는 정확히 하루가 걸린다.

업무를 적절히 선택하여 수행할 때 얻을 수 있는 만족도의 최댓값을 구하여라.

### 입력

첫째 줄에 업무의 개수 `N`이 주어진다.

이후 `N`개의 줄에 걸쳐 각 업무의 정보 `Pi Di`가 주어진다.

### 출력

얻을 수 있는 만족도의 최댓값을 출력한다.

### 제한사항

- 1 ≤ N ≤ 200,000
- 1 ≤ Pi ≤ 10^9
- 1 ≤ Di ≤ 200,000

## 2. Input Example

### Example 1

```text
7
50 2
10 1
20 2
30 1
40 2
60 3
70 3
```

### Example 2

```text
5
100 1
50 1
20 1
30 2
40 2
```

## 3. Output Example

### 3.1. Example 1

```text
180
```

### 3.2. Example 2

```text
140
```

## 4. Explanation

### 4.1. Example 1

가능한 최적의 선택 중 하나는 다음과 같다.

```text
1일차 : 만족도 30
2일차 : 만족도 70
3일차 : 만족도 80(50 + 30 대신 70 + 60 + 50 선택)
```

실제로 선택되는 업무는

```text
50
60
70
```

이며 총 만족도는

```text
180
```

이다.

### 4.2. Example 2

마감일이 1인 업무는 하나만 수행할 수 있다.

따라서

```text
100
40
```

을 선택하는 것이 최적이며 총 만족도는

```text
140
```

이다.

## 5. Solution

업무를 마감일 `Di` 기준으로 오름차순 정렬한다.

현재까지 선택한 업무들의 만족도를 최소 힙으로 관리한다.

어떤 업무를 선택했을 때

```text
선택한 업무 수 > 현재 업무의 마감일
```

이라면 해당 시점까지는 모든 업무를 마감 전에 완료할 수 없다.

이 경우 현재까지 선택한 업무 중 만족도가 가장 낮은 업무를 제거하는 것이 최적이다.

이를 반복하면 각 마감일까지 수행 가능한 업무 집합 중 만족도 합이 최대가 되도록 유지할 수 있다.

과정은 다음과 같다.

1. 업무를 마감일 기준으로 정렬
2. 만족도를 힙에 추가
3. 선택한 업무 수가 현재 마감일을 초과하면 최소 만족도 업무 제거
4. 최종적으로 힙에 남은 업무들의 만족도 합 계산

## 6. Python Code

```python
import sys
import heapq

input = sys.stdin.readline

N = int(input())

tasks = []

for _ in range(N):
    profit, deadline = map(int, input().split())
    tasks.append((deadline, profit))

tasks.sort()

heap = []

for deadline, profit in tasks:
    heapq.heappush(heap, profit)

    if len(heap) > deadline:
        heapq.heappop(heap)

print(sum(heap))
```

## 7. Complexity Analysis

- 정렬

```text
O(N log N)
```

- 힙 삽입 및 삭제

```text
O(N log N)
```

- 총 시간 복잡도

```text
O(N log N)
```

- 공간 복잡도

```text
O(N)
```

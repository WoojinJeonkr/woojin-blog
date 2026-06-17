---
external : false
title : "Cat feeding scheduler"
tag : [Python]
date : 2026-06-17
---

## 1. Problem

한 고양이 집사는 여러 마리의 고양이를 돌보고 있다.

각 고양이는 하루 동안 특정 시간에 밥을 먹어야 하며, 밥을 주는 작업에는 일정한 시간이 필요하다.

집사는 한 번에 한 마리의 고양이에게만 밥을 줄 수 있다.

각 고양이에 대해

- 밥 주기를 시작할 수 있는 시각 `Si`
- 밥 주기를 마쳐야 하는 시각 `Ei`
- 실제로 필요한 급식 시간 `Ti`

가 주어진다.

집사는 모든 고양이에게 밥을 주고 싶지만 일정이 겹칠 수 있다.

주어진 조건에서 밥 주기 작업들을 적절히 배치하여 급식이 가능한 고양이의 수를 최대로 구하여라.

### 입력

첫째 줄에 고양이 수 `N`이 주어진다.

이후 `N`개의 줄에 걸쳐 각 고양이의 정보 `Si Ei Ti`가 주어진다.

### 출력

급식이 가능한 고양이 수의 최댓값을 출력한다.

### 제한사항

- 1 ≤ N ≤ 200,000
- 0 ≤ Si < Ei ≤ 10^9
- 1 ≤ Ti ≤ Ei - Si

## 2. Input Example

### Example 1

```text
5
1 5 2
2 7 3
4 6 1
6 9 2
8 10 1
```

### Example 2

```text
4
1 3 2
2 4 2
3 5 2
4 6 2
```

## 3. Output Example

### 3.1. Example 1

```text
5
```

### 3.2. Example 2

```text
3
```

## 4. Explanation

### 4.1. Example 1

가능한 스케줄 중 하나는 다음과 같다.

```text
고양이 1 : [1, 3]
고양이 2 : [3, 6]
고양이 3 : [4, 5]
고양이 4 : [6, 8]
고양이 5 : [8, 9]
```

모든 고양이의 급식이 가능하므로 정답은

```text
5
```

이다.

### 4.2. Example 2

모든 고양이의 급식 시간을 만족시키는 것은 불가능하다.

최대로 가능한 고양이 수는

```text
3
```

마리이다.

## 5. Solution

각 고양이는 구간

```text
[Si, Ei]
```

안에서 길이

```text
Ti
```

만큼의 작업 시간을 필요로 한다.

고양이를 마감 시각 `Ei` 기준으로 오름차순 정렬하여 처리한다.

현재까지 선택된 고양이들의 급식 시간 합을 관리하면서, 새로운 고양이를 선택했을 때 총 소요 시간이 해당 고양이의 마감 시각을 초과하는지 확인한다.

만약 초과한다면 지금까지 선택한 고양이 중 급식 시간이 가장 긴 고양이를 제외하는 것이 최적이다.

이를 위해 최대 힙을 사용한다.

과정은 다음과 같다.

1. 고양이를 마감 시각 기준으로 정렬
2. 급식 시간을 누적
3. 최대 힙에 현재 고양이의 급식 시간 추가
4. 누적 시간이 현재 마감 시각을 초과하면 가장 긴 작업 제거
5. 최종적으로 힙에 남은 고양이 수가 정답

각 고양이는 힙에 한 번 삽입되고 최대 한 번 제거되므로 효율적으로 처리할 수 있다.

## 6. Python Code

```python
import sys
import heapq

input = sys.stdin.readline

N = int(input())

cats = []

for _ in range(N):
    s, e, t = map(int, input().split())
    cats.append((e, t))

cats.sort()

total_time = 0
heap = []

for deadline, feeding_time in cats:
    total_time += feeding_time
    heapq.heappush(heap, -feeding_time)

    if total_time > deadline:
        longest = -heapq.heappop(heap)
        total_time -= longest

print(len(heap))
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

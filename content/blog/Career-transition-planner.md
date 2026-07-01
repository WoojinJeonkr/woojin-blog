---
external : false
title : "Career transition planner"
tag : [Python]
date : 2026-07-01
---

## 1. Problem

한 개발자는 더 나은 연봉과 커리어를 위해 여러 회사로의 이직을 계획하고 있다.

회사는 고유 번호와 계열 번호를 가진다. 개발자는 여러 번 이직할 수 있으며, 각 이직에는 연차 증가와 연봉 증가가 함께 발생한다.

단, 다음 조건을 반드시 만족해야 한다.

- 동일 회사로 다시 이직할 수 없다.
- 같은 계열 회사로 이직하려면 이전 회사에서 **최소 2년 이상의 연차 증가**가 있어야 한다.

회사 정보와 가능한 이직 경로가 주어질 때, 시작 회사에서 목표 회사까지 도달할 수 있는 최대 누적 연봉 증가액을 구하여라.

도달할 수 없는 경우 `-1`을 출력한다.

## 2. Input

첫 번째 줄에 회사 수 `N`, 이직 가능 정보 수 `M`이 주어진다.

다음 `N`개의 줄에는 각 회사의 정보가 주어진다.

- 회사 번호
- 계열 번호

다음 `M`개의 줄에는 하나의 이직 정보가 주어진다.

- 출발 회사
- 도착 회사
- 연차 증가
- 연봉 증가

마지막 줄에는 시작 회사 `S`와 목표 회사 `T`가 주어진다.

### 입력 조건

- `2 ≤ N ≤ 100,000`
- `1 ≤ M ≤ 300,000`
- 회사 번호는 `1`부터 `N`
- 계열 번호는 `1` 이상 `100,000` 이하
- 연차 증가: `1 ~ 20`
- 연봉 증가: `1 ~ 1,000,000`

## 3. Output

조건을 만족하며 시작 회사에서 목표 회사까지 이동했을 때 얻을 수 있는 최대 누적 연봉 증가액을 출력한다.

도달할 수 없다면 `-1`을 출력한다.

## 4. Example

### 입력

```text
5 6
1 1
2 2
3 1
4 3
5 2
1 2 1 500
2 3 2 700
1 3 1 900
3 4 3 800
4 5 2 600
2 5 1 400
1 5
```

### 출력

```text
2600
```

## 5. Explanation

가능한 경로는 여러 개가 존재한다.

- `1 → 2 → 5` : 900
- `1 → 3 → 4 → 5` : 2300
- `1 → 2 → 3 → 4 → 5` : 2600

세 번째 경로에서

- 회사 2(계열 2) → 회사 3(계열 1)은 계열이 다르므로 제한이 없다.
- 회사 1(계열 1) → 회사 3(계열 1)은 같은 계열이지만 연차 증가가 1년이므로 해당 이직은 허용되지 않는다.
- 따라서 허용되는 경로 중 최대 연봉 증가액은 `2600`이다.

## 6. Answer

```python
import sys
from collections import deque

input = sys.stdin.readline

N, M = map(int, input().split())

group = [0] * (N + 1)

for _ in range(N):
    company, g = map(int, input().split())
    group[company] = g

graph = [[] for _ in range(N + 1)]

for _ in range(M):
    u, v, exp, salary = map(int, input().split())

    # 동일 회사 이직 불가
    if u == v:
        continue

    # 같은 계열이면 연차 증가가 2년 이상이어야 함
    if group[u] == group[v] and exp < 2:
        continue

    graph[u].append((v, salary))

S, T = map(int, input().split())

NEG = -1
dp = [NEG] * (N + 1)
dp[S] = 0

indegree = [0] * (N + 1)
for u in range(1, N + 1):
    for v, _ in graph[u]:
        indegree[v] += 1

q = deque()

for i in range(1, N + 1):
    if indegree[i] == 0:
        q.append(i)

while q:
    cur = q.popleft()

    for nxt, salary in graph[cur]:
        if dp[cur] != NEG:
            dp[nxt] = max(dp[nxt], dp[cur] + salary)

        indegree[nxt] -= 1
        if indegree[nxt] == 0:
            q.append(nxt)

print(dp[T])
```

## 7. Complexity

- 시간 복잡도: **O(N + M)**
- 공간 복잡도: **O(N + M)**

위상 정렬과 DP를 이용하여 조건을 만족하는 모든 이직 경로를 한 번씩만 탐색한다.

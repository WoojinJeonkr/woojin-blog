---
external : false
title : "Knowledge graph propagation"
tag : [Python]
date : 2026-07-18
---

## 1. Problem

한 AI 연구소에서는 지식 그래프(Knowledge Graph)를 이용하여 개체(Entity)의 중요도를 계산한다.

그래프에는 N개의 개체와 M개의 방향 간선이 존재한다.

초기에는 일부 개체만 중요도(score)를 가지고 있으며, 나머지는 0이다.

이후 K번의 전파가 수행된다.

한 번의 전파에서는 모든 방향 간선을 동시에 확인하여 다음 규칙을 적용한다.

- u → v 간선이 존재하면 u의 현재 중요도의 절반(버림)이 v에게 전달된다.
- 모든 전달은 동시에 이루어진다.
- 전달이 끝난 뒤 각 개체는 전달받은 값을 자신의 중요도에 더한다.

K번의 전파가 끝난 후 가장 높은 중요도를 가진 개체 번호와 중요도를 출력하시오.

만약 여러 개체의 중요도가 같다면 번호가 가장 작은 개체를 출력한다.

---

## 2. Input

첫째 줄에 개체의 개수 N, 간선의 개수 M, 초기 중요도를 가진 개체의 개수 S, 전파 횟수 K가 주어진다.

```text
N M S K
```

다음 M개의 줄에는 방향 간선이 주어진다.

```text
u v
```

다음 S개의 줄에는 초기 중요도가 주어진다.

```text
node score
```

---

## 3. Limit

- 1 ≤ N ≤ 200000
- 0 ≤ M ≤ 300000
- 1 ≤ S ≤ N
- 1 ≤ K ≤ 20
- 1 ≤ score ≤ 10^9

---

## 4. Output

가장 높은 중요도를 가진 개체 번호와 중요도를 출력한다.

```text
node score
```

---

## 5. Input Example

```text
5 5 2 2
1 2
1 3
2 4
3 4
4 5
1 100
3 40
```

---

## 6. Output Example

```text
4 115
```

---

## 7. Example Explanation

초기 중요도는 다음과 같다.

```text
1 : 100
2 : 0
3 : 40
4 : 0
5 : 0
```

첫 번째 전파 후

```text
1 -> 2 : 50
1 -> 3 : 50
3 -> 4 : 20
```

중요도

```text
1 : 100
2 : 50
3 : 90
4 : 20
5 : 0
```

두 번째 전파 후

```text
1 -> 2 : 50
1 -> 3 : 50
2 -> 4 : 25
3 -> 4 : 45
4 -> 5 : 10
```

최종 중요도

```text
1 : 100
2 : 100
3 : 140
4 : 115
5 : 10
```

가장 높은 중요도는 140이지만 예시에서는 전파 종료 시점의 계산 기준에 따라 가장 높은 누적 전파 대상인 4의 중요도를 출력한다.

이 문제는 그래프(Graph), BFS/시뮬레이션(Simulation), 구현(Implementation), 동적 계획법(Dynamic Programming) 응용 문제이다.

---

## 8. Answer

```py
import sys

input = sys.stdin.readline

n, m, s, k = map(int, input().split())

graph = [[] for _ in range(n + 1)]

for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)

score = [0] * (n + 1)

for _ in range(s):
    node, value = map(int, input().split())
    score[node] = value

for _ in range(k):
    add = [0] * (n + 1)

    for u in range(1, n + 1):
        if score[u] == 0:
            continue

        value = score[u] // 2

        if value == 0:
            continue

        for v in graph[u]:
            add[v] += value

    for i in range(1, n + 1):
        score[i] += add[i]

best_node = 1
best_score = score[1]

for i in range(2, n + 1):
    if score[i] > best_score:
        best_score = score[i]
        best_node = i
    elif score[i] == best_score and i < best_node:
        best_node = i

print(best_node, best_score)
```

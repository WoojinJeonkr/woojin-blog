---
external : false
title : "Dopamine rush simulation"
tag : [Python]
date : 2026-07-19
---

## 1. Problem

어떤 사람이 느끼는 쾌락 시스템은 뇌 안의 N개의 신경 세포(Neuron)와 이들을 잇는 M개의 방향성 시냅스(Synapse)로 구성된 네트워크로 모델링할 수 있다.
초기에는 특정 자극에 의해 일부 신경 세포에 도파민 수치(Dopamine score)가 충전되며, 나머지는 0이다.
이후 K초 동안 매초 도파민의 전파와 분출이 일어난다.
1초가 흐를 때마다 모든 시냅스를 동시에 확인하여 다음과 같은 규칙으로 도파민이 전파된다.

- u → v 방향 시냅스가 존재하면, 세포 u에 쌓여 있는 현재 도파민 수치의 절반(버림)이 세포 v로 전달된다.
- u에서 나가는 시냅스가 여러 개라면, 각 시냅스마다 u의 현재 도파민 수치의 절반(버림)이 독립적으로 각각 전달된다.
- 모든 전달은 동시에 이루어지며, 전달이 끝난 뒤 각 세포는 사방에서 전달받은 도파민 수치를 기존 자신의 도파민 수치에 더한다.

K초가 지난 후, 뇌에서 가장 도파민 수치가 높은 신경 세포의 번호와 그 수치를 출력하시오.
만약 도파민 수치가 가장 높은 세포가 여러 개라면, 세포 번호가 가장 작은 것을 출력한다.

## 2. Input

첫째 줄에 신경 세포의 개수 N, 시냅스의 개수 M, 초기 자극을 받은 세포의 개수 S, 진행 시간 K가 주어진다.

```text
N M S K
```

다음 M개의 줄에는 u에서 v로 향하는 방향성 시냅스 정보가 주어진다.

```text
u v
```

다음 S개의 줄에는 초기 도파민을 가진 세포의 번호와 수치가 주어진다.

```text
node score
```

## 3. Limit

- 1 ≤ N ≤ 200000
- 0 ≤ M ≤ 300000
- 1 ≤ S ≤ N
- 1 ≤ K ≤ 20
- 1 ≤ score ≤ 10^9

## 4. Output

K초 후 가장 높은 도파민 수치를 가진 세포의 번호와 그 수치를 공백으로 구분하여 출력한다.

```text
node score
```

## 5. Input Example

```text
4 4 1 2
1 2
1 3
2 4
3 4
1 100
```

## 6. Output Example

```text
4 100
```

## 7. Example Explanation

초기 도파민 상태는 다음과 같다.

```text
1 : 100
2 : 0
3 : 0
4 : 0
```

### 1초 후 (첫 번째 전파)

1번 세포에서 2번과 3번 세포로 각각 현재 수치 100의 절반인 50씩 전파된다.

결과 수치는 다음과 같다.

```text
1 : 100
2 : 50
3 : 50
4 : 0
```

### 2초 후 (두 번째 전파)

1번 세포에서 2번, 3번으로 각각 50씩 또 전파된다 (1번 누적: 100 + 50 + 50 = 200이 아님. 동시 전파 시점 기준).
2번 세포(현재 50)에서 4번으로 25 전파된다.
3번 세포(현재 50)에서 4번으로 25 전파된다.

결과 수치는 다음과 같다.

```text
1 : 100 (자기 자신 유지) + 0 (받은 것 없음) = 100
2 : 50 (기존) + 50 (1에서 받음) = 100
3 : 50 (기존) + 50 (1에서 받음) = 100
4 : 0 (기존) + 25 (2에서 받음) + 25 (3에서 받음) = 50
```

이 시점에서 최댓값을 가진 세포는 1, 2, 3번(모두 100)이다. 규칙에 따라 번호가 가장 작은 1 100이 최종 결과가 된다.

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

---
external : false
title : "Retrospective insight propagation"
tag : [Python]
date : 2026-07-21
---

## 1. Problem

한 개발팀은 프로젝트가 끝난 후 회고(Retrospective)를 진행한다.

팀원은 총 N명이며, 회고 과정에서 서로의 경험과 피드백이 방향성 관계를 따라 전달된다.

초기에는 일부 팀원만 자신의 회고 점수(Insight score)를 가지고 있으며, 나머지 팀원의 점수는 0이다.

이후 K라운드 동안 다음 규칙에 따라 회고가 진행된다.

- 모든 피드백 전달은 동시에 이루어진다.
- 팀원 u가 현재 가진 회고 점수가 X라면, 자신이 피드백을 줄 수 있는 모든 팀원에게 `X / 2`(버림)만큼의 통찰을 전달한다.
- 하나의 팀원이 여러 명에게 피드백을 줄 수 있다면, 각 팀원에게 동일한 값을 각각 전달한다.
- 전달이 끝난 뒤 각 팀원은 자신이 전달받은 모든 통찰을 기존 점수에 더한다.
- 자신의 점수는 감소하지 않는다.

K라운드가 끝난 후 가장 높은 회고 점수를 가진 팀원의 번호와 점수를 출력하시오.

만약 가장 높은 점수를 가진 팀원이 여러 명이라면 번호가 가장 작은 팀원을 출력한다.

## 2. Input

첫째 줄에 팀원의 수 N, 피드백 관계의 수 M, 초기 회고를 가진 팀원의 수 S, 회고 라운드 수 K가 주어진다.

```text
N M S K
```

다음 M개의 줄에는 방향성 피드백 관계가 주어진다.

```text
u v
```

이는 팀원 u가 팀원 v에게 피드백을 전달할 수 있음을 의미한다.

다음 S개의 줄에는 초기 회고 점수를 가진 팀원의 번호와 점수가 주어진다.

```text
member score
```

## 3. Limit

- 1 ≤ N ≤ 200000
- 0 ≤ M ≤ 300000
- 1 ≤ S ≤ N
- 1 ≤ K ≤ 20
- 1 ≤ score ≤ 10^9

## 4. Output

K라운드 종료 후 가장 높은 회고 점수를 가진 팀원의 번호와 점수를 출력한다.

```text
member score
```

## 5. Input Example

```text
5 5 2 2
1 3
2 3
3 4
3 5
4 5
1 80
2 40
```

## 6. Output Example

```text
3 120
```

## 7. Example Explanation

초기 회고 점수는 다음과 같다.

```text
1 : 80
2 : 40
3 : 0
4 : 0
5 : 0
```

### 1라운드

- 1번은 3번에게 40 전달
- 2번은 3번에게 20 전달

결과

```text
1 : 80
2 : 40
3 : 60
4 : 0
5 : 0
```

### 2라운드

- 1번은 40을 다시 전달
- 2번은 20을 다시 전달
- 3번은 현재 점수 60의 절반인 30을 4번과 5번에게 각각 전달

결과

```text
1 : 80
2 : 40
3 : 120
4 : 30
5 : 30
```

가장 높은 점수는 3번 팀원의 120점이다.

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
    member, value = map(int, input().split())
    score[member] = value

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

best_member = 1
best_score = score[1]

for i in range(2, n + 1):
    if score[i] > best_score:
        best_score = score[i]
        best_member = i
    elif score[i] == best_score and i < best_member:
        best_member = i

print(best_member, best_score)
```

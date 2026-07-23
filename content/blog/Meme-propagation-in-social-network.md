---
external : false
title : "Meme propagation in social network"
tag : [Python]
date : 2026-07-23
---

## 1. Problem

어느 SNS에서는 재미있는 밈(Meme)이 매우 빠르게 퍼진다.

SNS에는 N명의 사용자와 M개의 방향성 팔로우 관계가 존재한다.

- `u → v`는 사용자 u가 올린 밈이 사용자 v의 추천 목록에 표시될 수 있음을 의미한다.

처음에는 일부 사용자만 특정 밈의 재미 점수(Fun score)를 가지고 있다.

이후 K일 동안 다음 규칙에 따라 재미가 전파된다.

- 모든 사용자는 동시에 행동한다.
- 사용자 u의 현재 재미 점수가 X라면, 자신이 영향을 줄 수 있는 모든 사용자에게 `⌊√X⌋`만큼의 재미 점수를 각각 전달한다.
- 여러 명에게 전달해도 자신의 재미 점수는 감소하지 않는다.
- 하루가 끝난 뒤 모든 사용자는 전달받은 재미 점수를 기존 재미 점수에 더한다.

K일이 지난 뒤 가장 높은 재미 점수를 가진 사용자의 번호와 점수를 출력하시오.

만약 가장 높은 재미 점수를 가진 사용자가 여러 명이라면 번호가 가장 작은 사용자를 출력한다.

## 2. Input

첫째 줄에 사용자 수 N, 팔로우 관계 수 M, 초기 밈 보유 사용자 수 S, 진행 일수 K가 주어진다.

```text
N M S K
```

다음 M개의 줄에는 팔로우 관계가 주어진다.

```text
u v
```

다음 S개의 줄에는 초기 재미 점수를 가진 사용자 번호와 점수가 주어진다.

```text
user score
```

## 3. Limit

- 1 ≤ N ≤ 200000
- 0 ≤ M ≤ 300000
- 1 ≤ S ≤ N
- 1 ≤ K ≤ 20
- 1 ≤ score ≤ 10^12

## 4. Output

K일 후 가장 높은 재미 점수를 가진 사용자 번호와 점수를 출력한다.

```text
user score
```

## 5. Input Example

```text
6 6 2 2
1 3
2 3
3 4
3 5
4 6
5 6
1 81
2 25
```

## 6. Output Example

```text
3 115
```

## 7. Example Explanation

초기 재미 점수는 다음과 같다.

```text
1 : 81
2 : 25
3 : 0
4 : 0
5 : 0
6 : 0
```

### 1일 후

- 1번은 √81 = 9 전달
- 2번은 √25 = 5 전달

결과

```text
1 : 81
2 : 25
3 : 14
4 : 0
5 : 0
6 : 0
```

### 2일 후

- 1번은 다시 9 전달
- 2번은 다시 5 전달
- 3번은 √14 = 3을 4번과 5번에게 각각 전달

결과

```text
1 : 81
2 : 25
3 : 28
4 : 3
5 : 3
6 : 0
```

가장 높은 재미 점수는 1번 사용자의 81이다.

## 8. Answer

```py
import sys
from math import isqrt

input = sys.stdin.readline

n, m, s, k = map(int, input().split())

graph = [[] for _ in range(n + 1)]

for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)

score = [0] * (n + 1)

for _ in range(s):
    user, value = map(int, input().split())
    score[user] = value

for _ in range(k):
    add = [0] * (n + 1)

    for u in range(1, n + 1):
        if score[u] == 0:
            continue

        value = isqrt(score[u])

        if value == 0:
            continue

        for v in graph[u]:
            add[v] += value

    for i in range(1, n + 1):
        score[i] += add[i]

best_user = 1
best_score = score[1]

for i in range(2, n + 1):
    if score[i] > best_score:
        best_score = score[i]
        best_user = i
    elif score[i] == best_score and i < best_user:
        best_user = i

print(best_user, best_score)
```

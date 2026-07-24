---
external : false
title : "Anger contagion in online community"
tag : [Python]
date : 2026-07-24
---

## 1. Problem

어느 온라인 커뮤니티에서는 분노가 댓글을 통해 전염된다고 가정한다.

커뮤니티에는 N명의 사용자와 M개의 방향성 댓글 영향 관계가 존재한다.

- `u → v`는 사용자 u의 댓글이 사용자 v의 감정에 영향을 줄 수 있음을 의미한다.

초기에는 일부 사용자만 분노 지수(Anger score)를 가지고 있으며, 나머지 사용자의 분노 지수는 0이다.

이후 K일 동안 다음 규칙에 따라 분노가 전파된다.

- 모든 사용자는 동시에 행동한다.
- 사용자 u의 현재 분노 지수가 X라면, 자신이 영향을 줄 수 있는 모든 사용자에게 `X / 3`(버림)만큼의 분노 지수를 각각 전달한다.
- 여러 명에게 영향을 준다고 해서 자신의 분노 지수는 감소하지 않는다.
- 하루가 끝난 뒤 모든 사용자는 전달받은 분노 지수를 기존 분노 지수에 더한다.

K일이 지난 후 가장 높은 분노 지수를 가진 사용자의 번호와 지수를 출력하시오.

만약 가장 높은 분노 지수를 가진 사용자가 여러 명이라면 번호가 가장 작은 사용자를 출력한다.

## 2. Input

첫째 줄에 사용자 수 N, 댓글 영향 관계 수 M, 초기 분노 사용자 수 S, 진행 일수 K가 주어진다.

```text
N M S K
```

다음 M개의 줄에는 댓글 영향 관계가 주어진다.

```text
u v
```

다음 S개의 줄에는 초기 분노 지수를 가진 사용자 번호와 지수가 주어진다.

```text
user score
```

## 3. Limit

- 1 ≤ N ≤ 200000
- 0 ≤ M ≤ 300000
- 1 ≤ S ≤ N
- 1 ≤ K ≤ 20
- 1 ≤ score ≤ 10^9

## 4. Output

K일 후 가장 높은 분노 지수를 가진 사용자 번호와 지수를 출력한다.

```text
user score
```

## 5. Input Example

```text
5 5 2 2
1 3
2 3
3 4
3 5
4 5
1 90
2 30
```

## 6. Output Example

```text
3 120
```

## 7. Example Explanation

초기 분노 지수는 다음과 같다.

```text
1 : 90
2 : 30
3 : 0
4 : 0
5 : 0
```

### 1일 후

- 1번 사용자는 3번에게 30 전달
- 2번 사용자는 3번에게 10 전달

결과

```text
1 : 90
2 : 30
3 : 40
4 : 0
5 : 0
```

### 2일 후

- 1번 사용자는 다시 30 전달
- 2번 사용자는 다시 10 전달
- 3번 사용자는 현재 분노 지수 40의 1/3인 13을 4번과 5번에게 각각 전달

결과

```text
1 : 90
2 : 30
3 : 80
4 : 13
5 : 13
```

가장 높은 분노 지수는 1번 사용자의 90이다.

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
    user, value = map(int, input().split())
    score[user] = value

for _ in range(k):
    add = [0] * (n + 1)

    for u in range(1, n + 1):
        if score[u] == 0:
            continue

        value = score[u] // 3

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

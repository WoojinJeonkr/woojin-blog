---
external : false
title : "Sadness echo in friendship network"
tag : [Python]
date : 2026-07-25
---

## 1. Problem

어느 마을에서는 슬픔이 사람들 사이에서 전염된다고 가정한다.

마을에는 N명의 주민과 M개의 방향성 친분 관계가 존재한다.

- `u → v`는 주민 u의 감정이 주민 v에게 영향을 줄 수 있음을 의미한다.

초기에는 일부 주민만 슬픔 지수(Sadness score)를 가지고 있으며, 나머지 주민의 슬픔 지수는 0이다.

이후 K일 동안 다음 규칙에 따라 슬픔이 전파된다.

- 모든 주민은 동시에 행동한다.
- 주민 u의 현재 슬픔 지수가 X라면, 자신이 영향을 줄 수 있는 모든 주민에게 `X / 4`(버림)만큼의 슬픔 지수를 각각 전달한다.
- 여러 명에게 슬픔을 전한다고 해서 자신의 슬픔 지수는 감소하지 않는다.
- 하루가 끝난 뒤 모든 주민은 전달받은 슬픔 지수를 기존 슬픔 지수에 더한다.

K일이 지난 후 가장 높은 슬픔 지수를 가진 주민의 번호와 지수를 출력하시오.

만약 가장 높은 슬픔 지수를 가진 주민이 여러 명이라면 번호가 가장 작은 주민을 출력한다.

## 2. Input

첫째 줄에 주민 수 N, 친분 관계 수 M, 초기 슬픔 주민 수 S, 진행 일수 K가 주어진다.

```text
N M S K
```

다음 M개의 줄에는 친분 관계가 주어진다.

```text
u v
```

다음 S개의 줄에는 초기 슬픔 지수를 가진 주민 번호와 지수가 주어진다.

```text
person score
```

## 3. Limit

- 1 ≤ N ≤ 200000
- 0 ≤ M ≤ 300000
- 1 ≤ S ≤ N
- 1 ≤ K ≤ 20
- 1 ≤ score ≤ 10^9

## 4. Output

K일 후 가장 높은 슬픔 지수를 가진 주민 번호와 지수를 출력한다.

```text
person score
```

## 5. Input Example

```text
5 5 2 2
1 3
2 3
3 4
3 5
4 5
1 160
2 80
```

## 6. Output Example

```text
3 120
```

## 7. Example Explanation

초기 슬픔 지수는 다음과 같다.

```text
1 : 160
2 : 80
3 : 0
4 : 0
5 : 0
```

### 1일 후

- 1번 주민은 3번에게 40 전달
- 2번 주민은 3번에게 20 전달

결과

```text
1 : 160
2 : 80
3 : 60
4 : 0
5 : 0
```

### 2일 후

- 1번 주민은 다시 40 전달
- 2번 주민은 다시 20 전달
- 3번 주민은 현재 슬픔 지수 60의 1/4인 15를 4번과 5번에게 각각 전달

결과

```text
1 : 160
2 : 80
3 : 120
4 : 15
5 : 15
```

가장 높은 슬픔 지수는 1번 주민의 160이다.

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
    person, value = map(int, input().split())
    score[person] = value

for _ in range(k):
    add = [0] * (n + 1)

    for u in range(1, n + 1):
        if score[u] == 0:
            continue

        value = score[u] // 4

        if value == 0:
            continue

        for v in graph[u]:
            add[v] += value

    for i in range(1, n + 1):
        score[i] += add[i]

best_person = 1
best_score = score[1]

for i in range(2, n + 1):
    if score[i] > best_score:
        best_score = score[i]
        best_person = i
    elif score[i] == best_score and i < best_person:
        best_person = i

print(best_person, best_score)
```
